import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetModifyTrafficMirrorSessionActionEnum {
    ModifyTrafficMirrorSession = "ModifyTrafficMirrorSession"
}
export declare enum GetModifyTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyTrafficMirrorSessionQueryParams extends SpeakeasyBase {
    action: GetModifyTrafficMirrorSessionActionEnum;
    description?: string;
    dryRun?: boolean;
    packetLength?: number;
    removeField?: shared.TrafficMirrorSessionFieldEnum[];
    sessionNumber?: number;
    trafficMirrorFilterId?: string;
    trafficMirrorSessionId: string;
    trafficMirrorTargetId?: string;
    version: GetModifyTrafficMirrorSessionVersionEnum;
    virtualNetworkId?: number;
}
export declare class GetModifyTrafficMirrorSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyTrafficMirrorSessionRequest extends SpeakeasyBase {
    queryParams: GetModifyTrafficMirrorSessionQueryParams;
    headers: GetModifyTrafficMirrorSessionHeaders;
}
export declare class GetModifyTrafficMirrorSessionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
