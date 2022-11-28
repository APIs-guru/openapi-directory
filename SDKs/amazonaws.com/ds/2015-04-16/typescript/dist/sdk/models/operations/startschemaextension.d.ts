import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartSchemaExtensionXAmzTargetEnum {
    DirectoryService20150416StartSchemaExtension = "DirectoryService_20150416.StartSchemaExtension"
}
export declare class StartSchemaExtensionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSchemaExtensionXAmzTargetEnum;
}
export declare class StartSchemaExtensionRequest extends SpeakeasyBase {
    headers: StartSchemaExtensionHeaders;
    request: shared.StartSchemaExtensionRequest;
}
export declare class StartSchemaExtensionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryUnavailableException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    snapshotLimitExceededException?: any;
    startSchemaExtensionResult?: shared.StartSchemaExtensionResult;
    statusCode: number;
}
