import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RemoveIpRoutesXAmzTargetEnum {
    DirectoryService20150416RemoveIpRoutes = "DirectoryService_20150416.RemoveIpRoutes"
}
export declare class RemoveIpRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveIpRoutesXAmzTargetEnum;
}
export declare class RemoveIpRoutesRequest extends SpeakeasyBase {
    headers: RemoveIpRoutesHeaders;
    request: shared.RemoveIpRoutesRequest;
}
export declare class RemoveIpRoutesResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryUnavailableException?: any;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    removeIpRoutesResult?: Map<string, any>;
    serviceException?: any;
    statusCode: number;
}
