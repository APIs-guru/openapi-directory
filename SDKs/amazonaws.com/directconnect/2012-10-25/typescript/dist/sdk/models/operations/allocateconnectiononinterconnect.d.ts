import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AllocateConnectionOnInterconnectXAmzTargetEnum {
    OvertureServiceAllocateConnectionOnInterconnect = "OvertureService.AllocateConnectionOnInterconnect"
}
export declare class AllocateConnectionOnInterconnectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocateConnectionOnInterconnectXAmzTargetEnum;
}
export declare class AllocateConnectionOnInterconnectRequest extends SpeakeasyBase {
    headers: AllocateConnectionOnInterconnectHeaders;
    request: shared.AllocateConnectionOnInterconnectRequest;
}
export declare class AllocateConnectionOnInterconnectResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
