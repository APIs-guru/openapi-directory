import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetWithdrawByoipCidrActionEnum {
    WithdrawByoipCidr = "WithdrawByoipCidr"
}
export declare enum GetWithdrawByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetWithdrawByoipCidrQueryParams extends SpeakeasyBase {
    action: GetWithdrawByoipCidrActionEnum;
    cidr: string;
    dryRun?: boolean;
    version: GetWithdrawByoipCidrVersionEnum;
}
export declare class GetWithdrawByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetWithdrawByoipCidrRequest extends SpeakeasyBase {
    queryParams: GetWithdrawByoipCidrQueryParams;
    headers: GetWithdrawByoipCidrHeaders;
}
export declare class GetWithdrawByoipCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
