import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLimitsXAmzTargetEnum {
    DynamoDb20120810DescribeLimits = "DynamoDB_20120810.DescribeLimits"
}
export declare class DescribeLimitsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLimitsXAmzTargetEnum;
}
export declare class DescribeLimitsRequest extends SpeakeasyBase {
    headers: DescribeLimitsHeaders;
    request: Map<string, any>;
}
export declare class DescribeLimitsResponse extends SpeakeasyBase {
    contentType: string;
    describeLimitsOutput?: shared.DescribeLimitsOutput;
    internalServerError?: any;
    statusCode: number;
}
