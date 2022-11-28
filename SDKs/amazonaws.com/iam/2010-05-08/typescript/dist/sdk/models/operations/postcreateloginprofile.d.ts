import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateLoginProfileActionEnum {
    CreateLoginProfile = "CreateLoginProfile"
}
export declare enum PostCreateLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateLoginProfileQueryParams extends SpeakeasyBase {
    action: PostCreateLoginProfileActionEnum;
    version: PostCreateLoginProfileVersionEnum;
}
export declare class PostCreateLoginProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLoginProfileRequest extends SpeakeasyBase {
    queryParams: PostCreateLoginProfileQueryParams;
    headers: PostCreateLoginProfileHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLoginProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
