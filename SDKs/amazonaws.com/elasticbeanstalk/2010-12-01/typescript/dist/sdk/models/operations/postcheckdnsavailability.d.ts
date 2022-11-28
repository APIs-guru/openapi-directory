import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCheckDnsAvailabilityActionEnum {
    CheckDnsAvailability = "CheckDNSAvailability"
}
export declare enum PostCheckDnsAvailabilityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCheckDnsAvailabilityQueryParams extends SpeakeasyBase {
    action: PostCheckDnsAvailabilityActionEnum;
    version: PostCheckDnsAvailabilityVersionEnum;
}
export declare class PostCheckDnsAvailabilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCheckDnsAvailabilityRequest extends SpeakeasyBase {
    queryParams: PostCheckDnsAvailabilityQueryParams;
    headers: PostCheckDnsAvailabilityHeaders;
    request?: Uint8Array;
}
export declare class PostCheckDnsAvailabilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
