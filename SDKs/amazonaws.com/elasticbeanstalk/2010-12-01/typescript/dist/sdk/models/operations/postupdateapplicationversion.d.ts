import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateApplicationVersionActionEnum {
    UpdateApplicationVersion = "UpdateApplicationVersion"
}
export declare enum PostUpdateApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateApplicationVersionQueryParams extends SpeakeasyBase {
    action: PostUpdateApplicationVersionActionEnum;
    version: PostUpdateApplicationVersionVersionEnum;
}
export declare class PostUpdateApplicationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateApplicationVersionRequest extends SpeakeasyBase {
    queryParams: PostUpdateApplicationVersionQueryParams;
    headers: PostUpdateApplicationVersionHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateApplicationVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
