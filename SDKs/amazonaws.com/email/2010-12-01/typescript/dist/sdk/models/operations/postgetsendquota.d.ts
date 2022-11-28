import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetSendQuotaActionEnum {
    GetSendQuota = "GetSendQuota"
}
export declare enum PostGetSendQuotaVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetSendQuotaQueryParams extends SpeakeasyBase {
    action: PostGetSendQuotaActionEnum;
    version: PostGetSendQuotaVersionEnum;
}
export declare class PostGetSendQuotaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetSendQuotaRequest extends SpeakeasyBase {
    queryParams: PostGetSendQuotaQueryParams;
    headers: PostGetSendQuotaHeaders;
}
export declare class PostGetSendQuotaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
