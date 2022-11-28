import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyVolumeAttributeActionEnum {
    ModifyVolumeAttribute = "ModifyVolumeAttribute"
}
export declare enum PostModifyVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyVolumeAttributeQueryParams extends SpeakeasyBase {
    action: PostModifyVolumeAttributeActionEnum;
    version: PostModifyVolumeAttributeVersionEnum;
}
export declare class PostModifyVolumeAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyVolumeAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifyVolumeAttributeQueryParams;
    headers: PostModifyVolumeAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyVolumeAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
