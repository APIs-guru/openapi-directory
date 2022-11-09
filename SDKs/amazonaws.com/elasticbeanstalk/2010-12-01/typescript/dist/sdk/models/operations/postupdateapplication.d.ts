import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateApplicationActionEnum {
    UpdateApplication = "UpdateApplication"
}
export declare enum PostUpdateApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateApplicationQueryParams extends SpeakeasyBase {
    action: PostUpdateApplicationActionEnum;
    version: PostUpdateApplicationVersionEnum;
}
export declare class PostUpdateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateApplicationRequest extends SpeakeasyBase {
    queryParams: PostUpdateApplicationQueryParams;
    headers: PostUpdateApplicationHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
