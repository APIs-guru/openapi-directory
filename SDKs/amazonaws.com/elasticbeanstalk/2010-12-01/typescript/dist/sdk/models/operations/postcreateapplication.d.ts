import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateApplicationActionEnum {
    CreateApplication = "CreateApplication"
}
export declare enum PostCreateApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateApplicationQueryParams extends SpeakeasyBase {
    action: PostCreateApplicationActionEnum;
    version: PostCreateApplicationVersionEnum;
}
export declare class PostCreateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateApplicationRequest extends SpeakeasyBase {
    queryParams: PostCreateApplicationQueryParams;
    headers: PostCreateApplicationHeaders;
    request?: Uint8Array;
}
export declare class PostCreateApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
