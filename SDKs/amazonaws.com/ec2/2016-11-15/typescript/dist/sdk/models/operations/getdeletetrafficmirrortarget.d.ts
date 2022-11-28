import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteTrafficMirrorTargetActionEnum {
    DeleteTrafficMirrorTarget = "DeleteTrafficMirrorTarget"
}
export declare enum GetDeleteTrafficMirrorTargetVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTrafficMirrorTargetQueryParams extends SpeakeasyBase {
    action: GetDeleteTrafficMirrorTargetActionEnum;
    dryRun?: boolean;
    trafficMirrorTargetId: string;
    version: GetDeleteTrafficMirrorTargetVersionEnum;
}
export declare class GetDeleteTrafficMirrorTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTrafficMirrorTargetRequest extends SpeakeasyBase {
    queryParams: GetDeleteTrafficMirrorTargetQueryParams;
    headers: GetDeleteTrafficMirrorTargetHeaders;
}
export declare class GetDeleteTrafficMirrorTargetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
