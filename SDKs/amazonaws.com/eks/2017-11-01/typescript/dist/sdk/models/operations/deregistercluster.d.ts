import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeregisterClusterPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DeregisterClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeregisterClusterRequest extends SpeakeasyBase {
    pathParams: DeregisterClusterPathParams;
    headers: DeregisterClusterHeaders;
}
export declare class DeregisterClusterResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deregisterClusterResponse?: shared.DeregisterClusterResponse;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
