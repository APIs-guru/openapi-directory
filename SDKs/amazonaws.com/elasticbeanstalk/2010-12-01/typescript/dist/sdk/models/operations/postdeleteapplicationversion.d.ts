import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteApplicationVersionActionEnum {
    DeleteApplicationVersion = "DeleteApplicationVersion"
}
export declare enum PostDeleteApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteApplicationVersionQueryParams extends SpeakeasyBase {
    action: PostDeleteApplicationVersionActionEnum;
    version: PostDeleteApplicationVersionVersionEnum;
}
export declare class PostDeleteApplicationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteApplicationVersionRequest extends SpeakeasyBase {
    queryParams: PostDeleteApplicationVersionQueryParams;
    headers: PostDeleteApplicationVersionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteApplicationVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
