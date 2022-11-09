import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateApplicationVersionActionEnum {
    CreateApplicationVersion = "CreateApplicationVersion"
}
export declare enum PostCreateApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateApplicationVersionQueryParams extends SpeakeasyBase {
    action: PostCreateApplicationVersionActionEnum;
    version: PostCreateApplicationVersionVersionEnum;
}
export declare class PostCreateApplicationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateApplicationVersionRequest extends SpeakeasyBase {
    queryParams: PostCreateApplicationVersionQueryParams;
    headers: PostCreateApplicationVersionHeaders;
    request?: Uint8Array;
}
export declare class PostCreateApplicationVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
