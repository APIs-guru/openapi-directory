import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateInstanceProfileActionEnum {
    CreateInstanceProfile = "CreateInstanceProfile"
}
export declare enum PostCreateInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateInstanceProfileQueryParams extends SpeakeasyBase {
    action: PostCreateInstanceProfileActionEnum;
    version: PostCreateInstanceProfileVersionEnum;
}
export declare class PostCreateInstanceProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateInstanceProfileRequest extends SpeakeasyBase {
    queryParams: PostCreateInstanceProfileQueryParams;
    headers: PostCreateInstanceProfileHeaders;
    request?: Uint8Array;
}
export declare class PostCreateInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
