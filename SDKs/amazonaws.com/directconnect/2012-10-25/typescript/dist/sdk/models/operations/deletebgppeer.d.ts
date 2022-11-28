import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBgpPeerXAmzTargetEnum {
    OvertureServiceDeleteBgpPeer = "OvertureService.DeleteBGPPeer"
}
export declare class DeleteBgpPeerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBgpPeerXAmzTargetEnum;
}
export declare class DeleteBgpPeerRequest extends SpeakeasyBase {
    headers: DeleteBgpPeerHeaders;
    request: shared.DeleteBgpPeerRequest;
}
export declare class DeleteBgpPeerResponse extends SpeakeasyBase {
    contentType: string;
    deleteBgpPeerResponse?: shared.DeleteBgpPeerResponse;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
