import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTunnelsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTunnelsXAmzTargetEnum {
    IoTSecuredTunnelingListTunnels = "IoTSecuredTunneling.ListTunnels"
}
export declare class ListTunnelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTunnelsXAmzTargetEnum;
}
export declare class ListTunnelsRequest extends SpeakeasyBase {
    queryParams: ListTunnelsQueryParams;
    headers: ListTunnelsHeaders;
    request: shared.ListTunnelsRequest;
}
export declare class ListTunnelsResponse extends SpeakeasyBase {
    contentType: string;
    listTunnelsResponse?: shared.ListTunnelsResponse;
    statusCode: number;
}
