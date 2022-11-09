import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetSendQuotaActionEnum {
    GetSendQuota = "GetSendQuota"
}
export declare enum GetGetSendQuotaVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetSendQuotaQueryParams extends SpeakeasyBase {
    action: GetGetSendQuotaActionEnum;
    version: GetGetSendQuotaVersionEnum;
}
export declare class GetGetSendQuotaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetSendQuotaRequest extends SpeakeasyBase {
    queryParams: GetGetSendQuotaQueryParams;
    headers: GetGetSendQuotaHeaders;
}
export declare class GetGetSendQuotaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
