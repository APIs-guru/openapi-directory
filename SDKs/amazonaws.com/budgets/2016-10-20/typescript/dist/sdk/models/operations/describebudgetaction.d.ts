import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeBudgetActionXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeBudgetAction = "AWSBudgetServiceGateway.DescribeBudgetAction"
}
export declare class DescribeBudgetActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBudgetActionXAmzTargetEnum;
}
export declare class DescribeBudgetActionRequest extends SpeakeasyBase {
    headers: DescribeBudgetActionHeaders;
    request: shared.DescribeBudgetActionRequest;
}
export declare class DescribeBudgetActionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeBudgetActionResponse?: shared.DescribeBudgetActionResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
