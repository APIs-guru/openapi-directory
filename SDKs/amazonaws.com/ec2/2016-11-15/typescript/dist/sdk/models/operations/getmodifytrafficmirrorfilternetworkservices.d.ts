import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetModifyTrafficMirrorFilterNetworkServicesActionEnum {
    ModifyTrafficMirrorFilterNetworkServices = "ModifyTrafficMirrorFilterNetworkServices"
}
export declare enum GetModifyTrafficMirrorFilterNetworkServicesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyTrafficMirrorFilterNetworkServicesQueryParams extends SpeakeasyBase {
    action: GetModifyTrafficMirrorFilterNetworkServicesActionEnum;
    addNetworkService?: shared.TrafficMirrorNetworkServiceEnum[];
    dryRun?: boolean;
    removeNetworkService?: shared.TrafficMirrorNetworkServiceEnum[];
    trafficMirrorFilterId: string;
    version: GetModifyTrafficMirrorFilterNetworkServicesVersionEnum;
}
export declare class GetModifyTrafficMirrorFilterNetworkServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyTrafficMirrorFilterNetworkServicesRequest extends SpeakeasyBase {
    queryParams: GetModifyTrafficMirrorFilterNetworkServicesQueryParams;
    headers: GetModifyTrafficMirrorFilterNetworkServicesHeaders;
}
export declare class GetModifyTrafficMirrorFilterNetworkServicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
