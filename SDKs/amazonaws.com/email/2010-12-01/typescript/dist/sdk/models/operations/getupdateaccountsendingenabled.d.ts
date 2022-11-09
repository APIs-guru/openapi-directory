import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateAccountSendingEnabledActionEnum {
    UpdateAccountSendingEnabled = "UpdateAccountSendingEnabled"
}
export declare enum GetUpdateAccountSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetUpdateAccountSendingEnabledQueryParams extends SpeakeasyBase {
    action: GetUpdateAccountSendingEnabledActionEnum;
    enabled?: boolean;
    version: GetUpdateAccountSendingEnabledVersionEnum;
}
export declare class GetUpdateAccountSendingEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateAccountSendingEnabledRequest extends SpeakeasyBase {
    queryParams: GetUpdateAccountSendingEnabledQueryParams;
    headers: GetUpdateAccountSendingEnabledHeaders;
}
export declare class GetUpdateAccountSendingEnabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
