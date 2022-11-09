import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUpdateAvailabilityOptionsActionEnum {
    UpdateAvailabilityOptions = "UpdateAvailabilityOptions"
}
export declare enum GetUpdateAvailabilityOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GetUpdateAvailabilityOptionsQueryParams extends SpeakeasyBase {
    action: GetUpdateAvailabilityOptionsActionEnum;
    domainName: string;
    multiAz: boolean;
    version: GetUpdateAvailabilityOptionsVersionEnum;
}
export declare class GetUpdateAvailabilityOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdateAvailabilityOptionsRequest extends SpeakeasyBase {
    queryParams: GetUpdateAvailabilityOptionsQueryParams;
    headers: GetUpdateAvailabilityOptionsHeaders;
}
export declare class GetUpdateAvailabilityOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
