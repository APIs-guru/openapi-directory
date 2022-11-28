import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyInstanceMetadataOptionsActionEnum {
    ModifyInstanceMetadataOptions = "ModifyInstanceMetadataOptions"
}
export declare enum PostModifyInstanceMetadataOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyInstanceMetadataOptionsQueryParams extends SpeakeasyBase {
    action: PostModifyInstanceMetadataOptionsActionEnum;
    version: PostModifyInstanceMetadataOptionsVersionEnum;
}
export declare class PostModifyInstanceMetadataOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyInstanceMetadataOptionsRequest extends SpeakeasyBase {
    queryParams: PostModifyInstanceMetadataOptionsQueryParams;
    headers: PostModifyInstanceMetadataOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostModifyInstanceMetadataOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
