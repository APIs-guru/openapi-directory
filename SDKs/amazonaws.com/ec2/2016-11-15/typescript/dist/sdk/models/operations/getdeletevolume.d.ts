import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteVolumeActionEnum {
    DeleteVolume = "DeleteVolume"
}
export declare enum GetDeleteVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteVolumeQueryParams extends SpeakeasyBase {
    action: GetDeleteVolumeActionEnum;
    dryRun?: boolean;
    version: GetDeleteVolumeVersionEnum;
    volumeId: string;
}
export declare class GetDeleteVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVolumeRequest extends SpeakeasyBase {
    queryParams: GetDeleteVolumeQueryParams;
    headers: GetDeleteVolumeHeaders;
}
export declare class GetDeleteVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
