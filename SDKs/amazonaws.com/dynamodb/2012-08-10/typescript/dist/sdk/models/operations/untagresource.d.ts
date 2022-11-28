import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    DynamoDb20120810UntagResource = "DynamoDB_20120810.UntagResource"
}
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: shared.UntagResourceInput;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
