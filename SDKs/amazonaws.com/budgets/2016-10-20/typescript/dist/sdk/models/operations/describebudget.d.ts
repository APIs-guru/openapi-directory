import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeBudgetXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeBudget = "AWSBudgetServiceGateway.DescribeBudget"
}
export declare class DescribeBudgetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBudgetXAmzTargetEnum;
}
export declare class DescribeBudgetRequest extends SpeakeasyBase {
    headers: DescribeBudgetHeaders;
    request: shared.DescribeBudgetRequest;
}
export declare class DescribeBudgetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeBudgetResponse?: shared.DescribeBudgetResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
