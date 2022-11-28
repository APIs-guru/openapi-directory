import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAdvertiseByoipCidrActionEnum {
    AdvertiseByoipCidr = "AdvertiseByoipCidr"
}
export declare enum PostAdvertiseByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAdvertiseByoipCidrQueryParams extends SpeakeasyBase {
    action: PostAdvertiseByoipCidrActionEnum;
    version: PostAdvertiseByoipCidrVersionEnum;
}
export declare class PostAdvertiseByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAdvertiseByoipCidrRequest extends SpeakeasyBase {
    queryParams: PostAdvertiseByoipCidrQueryParams;
    headers: PostAdvertiseByoipCidrHeaders;
    request?: Uint8Array;
}
export declare class PostAdvertiseByoipCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
