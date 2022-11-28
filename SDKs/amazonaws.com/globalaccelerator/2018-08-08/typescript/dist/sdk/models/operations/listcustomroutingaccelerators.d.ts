import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomRoutingAcceleratorsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCustomRoutingAcceleratorsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingAccelerators = "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators"
}
export declare class ListCustomRoutingAcceleratorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCustomRoutingAcceleratorsXAmzTargetEnum;
}
export declare class ListCustomRoutingAcceleratorsRequest extends SpeakeasyBase {
    queryParams: ListCustomRoutingAcceleratorsQueryParams;
    headers: ListCustomRoutingAcceleratorsHeaders;
    request: shared.ListCustomRoutingAcceleratorsRequest;
}
export declare class ListCustomRoutingAcceleratorsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidArgumentException?: any;
    invalidNextTokenException?: any;
    listCustomRoutingAcceleratorsResponse?: shared.ListCustomRoutingAcceleratorsResponse;
    statusCode: number;
}
