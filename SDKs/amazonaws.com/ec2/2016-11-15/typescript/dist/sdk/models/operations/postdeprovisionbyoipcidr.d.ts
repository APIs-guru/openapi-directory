import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeprovisionByoipCidrActionEnum {
    DeprovisionByoipCidr = "DeprovisionByoipCidr"
}
export declare enum PostDeprovisionByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeprovisionByoipCidrQueryParams extends SpeakeasyBase {
    action: PostDeprovisionByoipCidrActionEnum;
    version: PostDeprovisionByoipCidrVersionEnum;
}
export declare class PostDeprovisionByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeprovisionByoipCidrRequest extends SpeakeasyBase {
    queryParams: PostDeprovisionByoipCidrQueryParams;
    headers: PostDeprovisionByoipCidrHeaders;
    request?: Uint8Array;
}
export declare class PostDeprovisionByoipCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
