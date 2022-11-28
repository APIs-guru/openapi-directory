import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEnableVolumeIoActionEnum {
    EnableVolumeIo = "EnableVolumeIO"
}
export declare enum GetEnableVolumeIoVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetEnableVolumeIoQueryParams extends SpeakeasyBase {
    action: GetEnableVolumeIoActionEnum;
    dryRun?: boolean;
    version: GetEnableVolumeIoVersionEnum;
    volumeId: string;
}
export declare class GetEnableVolumeIoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableVolumeIoRequest extends SpeakeasyBase {
    queryParams: GetEnableVolumeIoQueryParams;
    headers: GetEnableVolumeIoHeaders;
}
export declare class GetEnableVolumeIoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
