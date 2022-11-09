import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyVolumeAttributeActionEnum {
    ModifyVolumeAttribute = "ModifyVolumeAttribute"
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
**/
export declare class GetModifyVolumeAttributeAutoEnableIo extends SpeakeasyBase {
    value?: boolean;
}
export declare enum GetModifyVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyVolumeAttributeQueryParams extends SpeakeasyBase {
    action: GetModifyVolumeAttributeActionEnum;
    autoEnableIo?: GetModifyVolumeAttributeAutoEnableIo;
    dryRun?: boolean;
    version: GetModifyVolumeAttributeVersionEnum;
    volumeId: string;
}
export declare class GetModifyVolumeAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyVolumeAttributeRequest extends SpeakeasyBase {
    queryParams: GetModifyVolumeAttributeQueryParams;
    headers: GetModifyVolumeAttributeHeaders;
}
export declare class GetModifyVolumeAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
