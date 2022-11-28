import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetConnectionXAmzTargetEnum {
    AwsGlueGetConnection = "AWSGlue.GetConnection"
}
export declare class GetConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConnectionXAmzTargetEnum;
}
export declare class GetConnectionRequest extends SpeakeasyBase {
    headers: GetConnectionHeaders;
    request: shared.GetConnectionRequest;
}
export declare class GetConnectionResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getConnectionResponse?: shared.GetConnectionResponse;
    glueEncryptionException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
