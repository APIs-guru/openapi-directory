import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateNumberOfDomainControllersXAmzTargetEnum {
    DirectoryService20150416UpdateNumberOfDomainControllers = "DirectoryService_20150416.UpdateNumberOfDomainControllers"
}
export declare class UpdateNumberOfDomainControllersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNumberOfDomainControllersXAmzTargetEnum;
}
export declare class UpdateNumberOfDomainControllersRequest extends SpeakeasyBase {
    headers: UpdateNumberOfDomainControllersHeaders;
    request: shared.UpdateNumberOfDomainControllersRequest;
}
export declare class UpdateNumberOfDomainControllersResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryUnavailableException?: any;
    domainControllerLimitExceededException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
    updateNumberOfDomainControllersResult?: Map<string, any>;
}
