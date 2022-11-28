import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateConditionalForwarderXAmzTargetEnum {
    DirectoryService20150416CreateConditionalForwarder = "DirectoryService_20150416.CreateConditionalForwarder"
}
export declare class CreateConditionalForwarderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConditionalForwarderXAmzTargetEnum;
}
export declare class CreateConditionalForwarderRequest extends SpeakeasyBase {
    headers: CreateConditionalForwarderHeaders;
    request: shared.CreateConditionalForwarderRequest;
}
export declare class CreateConditionalForwarderResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createConditionalForwarderResult?: Map<string, any>;
    directoryUnavailableException?: any;
    entityAlreadyExistsException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
