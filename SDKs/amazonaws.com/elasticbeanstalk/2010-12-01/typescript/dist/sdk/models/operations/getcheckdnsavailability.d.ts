import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCheckDnsAvailabilityActionEnum {
    CheckDnsAvailability = "CheckDNSAvailability"
}
export declare enum GetCheckDnsAvailabilityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetCheckDnsAvailabilityQueryParams extends SpeakeasyBase {
    action: GetCheckDnsAvailabilityActionEnum;
    cnamePrefix: string;
    version: GetCheckDnsAvailabilityVersionEnum;
}
export declare class GetCheckDnsAvailabilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCheckDnsAvailabilityRequest extends SpeakeasyBase {
    queryParams: GetCheckDnsAvailabilityQueryParams;
    headers: GetCheckDnsAvailabilityHeaders;
}
export declare class GetCheckDnsAvailabilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
