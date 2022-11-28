import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateConnectionXAmzTargetEnum {
    AwsGlueUpdateConnection = "AWSGlue.UpdateConnection"
}
export declare class UpdateConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateConnectionXAmzTargetEnum;
}
export declare class UpdateConnectionRequest extends SpeakeasyBase {
    headers: UpdateConnectionHeaders;
    request: shared.UpdateConnectionRequest;
}
export declare class UpdateConnectionResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateConnectionResponse?: Map<string, any>;
}
