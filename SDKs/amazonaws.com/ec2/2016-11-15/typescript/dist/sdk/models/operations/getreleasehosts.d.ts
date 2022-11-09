import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetReleaseHostsActionEnum {
    ReleaseHosts = "ReleaseHosts"
}
export declare enum GetReleaseHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetReleaseHostsQueryParams extends SpeakeasyBase {
    action: GetReleaseHostsActionEnum;
    hostId: string[];
    version: GetReleaseHostsVersionEnum;
}
export declare class GetReleaseHostsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReleaseHostsRequest extends SpeakeasyBase {
    queryParams: GetReleaseHostsQueryParams;
    headers: GetReleaseHostsHeaders;
}
export declare class GetReleaseHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
