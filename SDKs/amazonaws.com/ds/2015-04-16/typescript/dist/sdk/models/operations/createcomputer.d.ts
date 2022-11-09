import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateComputerXAmzTargetEnum {
    DirectoryService20150416CreateComputer = "DirectoryService_20150416.CreateComputer"
}
export declare class CreateComputerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateComputerXAmzTargetEnum;
}
export declare class CreateComputerRequest extends SpeakeasyBase {
    headers: CreateComputerHeaders;
    request: shared.CreateComputerRequest;
}
export declare class CreateComputerResponse extends SpeakeasyBase {
    authenticationFailedException?: any;
    clientException?: any;
    contentType: string;
    createComputerResult?: shared.CreateComputerResult;
    directoryUnavailableException?: any;
    entityAlreadyExistsException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
