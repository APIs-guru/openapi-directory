import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTableVersionXAmzTargetEnum {
    AwsGlueDeleteTableVersion = "AWSGlue.DeleteTableVersion"
}
export declare class DeleteTableVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTableVersionXAmzTargetEnum;
}
export declare class DeleteTableVersionRequest extends SpeakeasyBase {
    headers: DeleteTableVersionHeaders;
    request: shared.DeleteTableVersionRequest;
}
export declare class DeleteTableVersionResponse extends SpeakeasyBase {
    contentType: string;
    deleteTableVersionResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
