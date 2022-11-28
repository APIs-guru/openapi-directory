import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListListenersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListListenersXAmzTargetEnum {
    GlobalAcceleratorV20180706ListListeners = "GlobalAccelerator_V20180706.ListListeners"
}
export declare class ListListenersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListListenersXAmzTargetEnum;
}
export declare class ListListenersRequest extends SpeakeasyBase {
    queryParams: ListListenersQueryParams;
    headers: ListListenersHeaders;
    request: shared.ListListenersRequest;
}
export declare class ListListenersResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidNextTokenException?: any;
    listListenersResponse?: shared.ListListenersResponse;
    statusCode: number;
}
