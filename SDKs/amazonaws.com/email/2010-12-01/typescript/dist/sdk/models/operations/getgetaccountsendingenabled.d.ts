import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetAccountSendingEnabledActionEnum {
    GetAccountSendingEnabled = "GetAccountSendingEnabled"
}
export declare enum GetGetAccountSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetGetAccountSendingEnabledQueryParams extends SpeakeasyBase {
    action: GetGetAccountSendingEnabledActionEnum;
    version: GetGetAccountSendingEnabledVersionEnum;
}
export declare class GetGetAccountSendingEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetAccountSendingEnabledRequest extends SpeakeasyBase {
    queryParams: GetGetAccountSendingEnabledQueryParams;
    headers: GetGetAccountSendingEnabledHeaders;
}
export declare class GetGetAccountSendingEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
