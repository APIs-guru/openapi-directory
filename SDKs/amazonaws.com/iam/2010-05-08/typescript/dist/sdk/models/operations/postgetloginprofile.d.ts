import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetLoginProfileActionEnum {
    GetLoginProfile = "GetLoginProfile"
}
export declare enum PostGetLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetLoginProfileQueryParams extends SpeakeasyBase {
    action: PostGetLoginProfileActionEnum;
    version: PostGetLoginProfileVersionEnum;
}
export declare class PostGetLoginProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetLoginProfileRequest extends SpeakeasyBase {
    queryParams: PostGetLoginProfileQueryParams;
    headers: PostGetLoginProfileHeaders;
    request?: Uint8Array;
}
export declare class PostGetLoginProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
