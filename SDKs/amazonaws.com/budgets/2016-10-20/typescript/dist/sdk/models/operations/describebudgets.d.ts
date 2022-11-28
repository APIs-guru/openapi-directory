import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBudgetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeBudgetsXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeBudgets = "AWSBudgetServiceGateway.DescribeBudgets"
}
export declare class DescribeBudgetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBudgetsXAmzTargetEnum;
}
export declare class DescribeBudgetsRequest extends SpeakeasyBase {
    queryParams: DescribeBudgetsQueryParams;
    headers: DescribeBudgetsHeaders;
    request: shared.DescribeBudgetsRequest;
}
export declare class DescribeBudgetsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeBudgetsResponse?: shared.DescribeBudgetsResponse;
    expiredNextTokenException?: any;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
