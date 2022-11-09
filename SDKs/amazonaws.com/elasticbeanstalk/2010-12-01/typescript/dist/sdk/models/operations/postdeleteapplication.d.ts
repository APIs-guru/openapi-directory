import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteApplicationActionEnum {
    DeleteApplication = "DeleteApplication"
}
export declare enum PostDeleteApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteApplicationQueryParams extends SpeakeasyBase {
    action: PostDeleteApplicationActionEnum;
    version: PostDeleteApplicationVersionEnum;
}
export declare class PostDeleteApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteApplicationRequest extends SpeakeasyBase {
    queryParams: PostDeleteApplicationQueryParams;
    headers: PostDeleteApplicationHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
