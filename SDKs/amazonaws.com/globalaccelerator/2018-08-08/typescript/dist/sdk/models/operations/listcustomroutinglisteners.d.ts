import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomRoutingListenersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCustomRoutingListenersXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingListeners = "GlobalAccelerator_V20180706.ListCustomRoutingListeners"
}
export declare class ListCustomRoutingListenersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCustomRoutingListenersXAmzTargetEnum;
}
export declare class ListCustomRoutingListenersRequest extends SpeakeasyBase {
    queryParams: ListCustomRoutingListenersQueryParams;
    headers: ListCustomRoutingListenersHeaders;
    request: shared.ListCustomRoutingListenersRequest;
}
export declare class ListCustomRoutingListenersResponse extends SpeakeasyBase {
    acceleratorNotFoundException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidNextTokenException?: any;
    listCustomRoutingListenersResponse?: shared.ListCustomRoutingListenersResponse;
    statusCode: number;
}
