import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CancelSchemaExtensionXAmzTargetEnum {
    DirectoryService20150416CancelSchemaExtension = "DirectoryService_20150416.CancelSchemaExtension"
}
export declare class CancelSchemaExtensionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelSchemaExtensionXAmzTargetEnum;
}
export declare class CancelSchemaExtensionRequest extends SpeakeasyBase {
    headers: CancelSchemaExtensionHeaders;
    request: shared.CancelSchemaExtensionRequest;
}
export declare class CancelSchemaExtensionResponse extends SpeakeasyBase {
    cancelSchemaExtensionResult?: Map<string, any>;
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    serviceException?: any;
    statusCode: number;
}
