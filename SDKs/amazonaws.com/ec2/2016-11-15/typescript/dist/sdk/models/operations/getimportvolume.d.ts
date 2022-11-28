import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetImportVolumeActionEnum {
    ImportVolume = "ImportVolume"
}
/**
 * Describes a disk image.
**/
export declare class GetImportVolumeImage extends SpeakeasyBase {
    bytes: number;
    format: shared.DiskImageFormatEnum;
    importManifestUrl: string;
}
export declare enum GetImportVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
/**
 * Describes an EBS volume.
**/
export declare class GetImportVolumeVolume extends SpeakeasyBase {
    size: number;
}
export declare class GetImportVolumeQueryParams extends SpeakeasyBase {
    action: GetImportVolumeActionEnum;
    availabilityZone: string;
    description?: string;
    dryRun?: boolean;
    image: GetImportVolumeImage;
    version: GetImportVolumeVersionEnum;
    volume: GetImportVolumeVolume;
}
export declare class GetImportVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImportVolumeRequest extends SpeakeasyBase {
    queryParams: GetImportVolumeQueryParams;
    headers: GetImportVolumeHeaders;
}
export declare class GetImportVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
