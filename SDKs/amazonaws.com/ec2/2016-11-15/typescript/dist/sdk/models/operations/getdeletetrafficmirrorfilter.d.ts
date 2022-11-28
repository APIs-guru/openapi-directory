import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteTrafficMirrorFilterActionEnum {
    DeleteTrafficMirrorFilter = "DeleteTrafficMirrorFilter"
}
export declare enum GetDeleteTrafficMirrorFilterVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTrafficMirrorFilterQueryParams extends SpeakeasyBase {
    action: GetDeleteTrafficMirrorFilterActionEnum;
    dryRun?: boolean;
    trafficMirrorFilterId: string;
    version: GetDeleteTrafficMirrorFilterVersionEnum;
}
export declare class GetDeleteTrafficMirrorFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTrafficMirrorFilterRequest extends SpeakeasyBase {
    queryParams: GetDeleteTrafficMirrorFilterQueryParams;
    headers: GetDeleteTrafficMirrorFilterHeaders;
}
export declare class GetDeleteTrafficMirrorFilterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
