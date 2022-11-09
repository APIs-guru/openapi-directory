import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetAccountSummaryActionEnum {
    GetAccountSummary = "GetAccountSummary"
}
export declare enum GetGetAccountSummaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetGetAccountSummaryQueryParams extends SpeakeasyBase {
    action: GetGetAccountSummaryActionEnum;
    version: GetGetAccountSummaryVersionEnum;
}
export declare class GetGetAccountSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetAccountSummaryRequest extends SpeakeasyBase {
    queryParams: GetGetAccountSummaryQueryParams;
    headers: GetGetAccountSummaryHeaders;
}
export declare class GetGetAccountSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
