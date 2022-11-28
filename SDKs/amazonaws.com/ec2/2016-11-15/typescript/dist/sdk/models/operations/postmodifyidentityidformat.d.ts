import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyIdentityIdFormatActionEnum {
    ModifyIdentityIdFormat = "ModifyIdentityIdFormat"
}
export declare enum PostModifyIdentityIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyIdentityIdFormatQueryParams extends SpeakeasyBase {
    action: PostModifyIdentityIdFormatActionEnum;
    version: PostModifyIdentityIdFormatVersionEnum;
}
export declare class PostModifyIdentityIdFormatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyIdentityIdFormatRequest extends SpeakeasyBase {
    queryParams: PostModifyIdentityIdFormatQueryParams;
    headers: PostModifyIdentityIdFormatHeaders;
    request?: Uint8Array;
}
export declare class PostModifyIdentityIdFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
