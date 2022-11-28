import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteConditionalForwarderXAmzTargetEnum {
    DirectoryService20150416DeleteConditionalForwarder = "DirectoryService_20150416.DeleteConditionalForwarder"
}
export declare class DeleteConditionalForwarderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConditionalForwarderXAmzTargetEnum;
}
export declare class DeleteConditionalForwarderRequest extends SpeakeasyBase {
    headers: DeleteConditionalForwarderHeaders;
    request: shared.DeleteConditionalForwarderRequest;
}
export declare class DeleteConditionalForwarderResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteConditionalForwarderResult?: Map<string, any>;
    directoryUnavailableException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
