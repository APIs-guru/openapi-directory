import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBgpPeerXAmzTargetEnum {
    OvertureServiceCreateBgpPeer = "OvertureService.CreateBGPPeer"
}
export declare class CreateBgpPeerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBgpPeerXAmzTargetEnum;
}
export declare class CreateBgpPeerRequest extends SpeakeasyBase {
    headers: CreateBgpPeerHeaders;
    request: shared.CreateBgpPeerRequest;
}
export declare class CreateBgpPeerResponse extends SpeakeasyBase {
    contentType: string;
    createBgpPeerResponse?: shared.CreateBgpPeerResponse;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
