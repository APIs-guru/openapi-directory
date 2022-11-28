import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddIpRoutesXAmzTargetEnum {
    DirectoryService20150416AddIpRoutes = "DirectoryService_20150416.AddIpRoutes"
}
export declare class AddIpRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddIpRoutesXAmzTargetEnum;
}
export declare class AddIpRoutesRequest extends SpeakeasyBase {
    headers: AddIpRoutesHeaders;
    request: shared.AddIpRoutesRequest;
}
export declare class AddIpRoutesResponse extends SpeakeasyBase {
    addIpRoutesResult?: Map<string, any>;
    clientException?: any;
    contentType: string;
    directoryUnavailableException?: any;
    entityAlreadyExistsException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    ipRouteLimitExceededException?: any;
    serviceException?: any;
    statusCode: number;
}
