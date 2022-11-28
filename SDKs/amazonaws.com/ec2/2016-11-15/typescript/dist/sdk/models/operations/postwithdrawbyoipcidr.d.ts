import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostWithdrawByoipCidrActionEnum {
    WithdrawByoipCidr = "WithdrawByoipCidr"
}
export declare enum PostWithdrawByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostWithdrawByoipCidrQueryParams extends SpeakeasyBase {
    action: PostWithdrawByoipCidrActionEnum;
    version: PostWithdrawByoipCidrVersionEnum;
}
export declare class PostWithdrawByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostWithdrawByoipCidrRequest extends SpeakeasyBase {
    queryParams: PostWithdrawByoipCidrQueryParams;
    headers: PostWithdrawByoipCidrHeaders;
    request?: Uint8Array;
}
export declare class PostWithdrawByoipCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
