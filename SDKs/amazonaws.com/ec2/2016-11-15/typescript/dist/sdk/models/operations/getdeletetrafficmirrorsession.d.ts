import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteTrafficMirrorSessionActionEnum {
    DeleteTrafficMirrorSession = "DeleteTrafficMirrorSession"
}
export declare enum GetDeleteTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTrafficMirrorSessionQueryParams extends SpeakeasyBase {
    action: GetDeleteTrafficMirrorSessionActionEnum;
    dryRun?: boolean;
    trafficMirrorSessionId: string;
    version: GetDeleteTrafficMirrorSessionVersionEnum;
}
export declare class GetDeleteTrafficMirrorSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTrafficMirrorSessionRequest extends SpeakeasyBase {
    queryParams: GetDeleteTrafficMirrorSessionQueryParams;
    headers: GetDeleteTrafficMirrorSessionHeaders;
}
export declare class GetDeleteTrafficMirrorSessionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
