import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAdvertiseByoipCidrActionEnum {
    AdvertiseByoipCidr = "AdvertiseByoipCidr"
}
export declare enum GetAdvertiseByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAdvertiseByoipCidrQueryParams extends SpeakeasyBase {
    action: GetAdvertiseByoipCidrActionEnum;
    cidr: string;
    dryRun?: boolean;
    version: GetAdvertiseByoipCidrVersionEnum;
}
export declare class GetAdvertiseByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAdvertiseByoipCidrRequest extends SpeakeasyBase {
    queryParams: GetAdvertiseByoipCidrQueryParams;
    headers: GetAdvertiseByoipCidrHeaders;
}
export declare class GetAdvertiseByoipCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
