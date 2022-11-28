import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeprovisionByoipCidrActionEnum {
    DeprovisionByoipCidr = "DeprovisionByoipCidr"
}
export declare enum GetDeprovisionByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeprovisionByoipCidrQueryParams extends SpeakeasyBase {
    action: GetDeprovisionByoipCidrActionEnum;
    cidr: string;
    dryRun?: boolean;
    version: GetDeprovisionByoipCidrVersionEnum;
}
export declare class GetDeprovisionByoipCidrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeprovisionByoipCidrRequest extends SpeakeasyBase {
    queryParams: GetDeprovisionByoipCidrQueryParams;
    headers: GetDeprovisionByoipCidrHeaders;
}
export declare class GetDeprovisionByoipCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
