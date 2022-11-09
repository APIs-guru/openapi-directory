import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListIpRoutesXAmzTargetEnum {
    DirectoryService20150416ListIpRoutes = "DirectoryService_20150416.ListIpRoutes"
}
export declare class ListIpRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListIpRoutesXAmzTargetEnum;
}
export declare class ListIpRoutesRequest extends SpeakeasyBase {
    headers: ListIpRoutesHeaders;
    request: shared.ListIpRoutesRequest;
}
export declare class ListIpRoutesResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listIpRoutesResult?: shared.ListIpRoutesResult;
    serviceException?: any;
    statusCode: number;
}
