import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateLoginProfileActionEnum {
    UpdateLoginProfile = "UpdateLoginProfile"
}
export declare enum PostUpdateLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateLoginProfileQueryParams extends SpeakeasyBase {
    action: PostUpdateLoginProfileActionEnum;
    version: PostUpdateLoginProfileVersionEnum;
}
export declare class PostUpdateLoginProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateLoginProfileRequest extends SpeakeasyBase {
    queryParams: PostUpdateLoginProfileQueryParams;
    headers: PostUpdateLoginProfileHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateLoginProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
