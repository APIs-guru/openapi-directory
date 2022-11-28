import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetReleaseAddressActionEnum {
    ReleaseAddress = "ReleaseAddress"
}
export declare enum GetReleaseAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetReleaseAddressQueryParams extends SpeakeasyBase {
    action: GetReleaseAddressActionEnum;
    allocationId?: string;
    dryRun?: boolean;
    networkBorderGroup?: string;
    publicIp?: string;
    version: GetReleaseAddressVersionEnum;
}
export declare class GetReleaseAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReleaseAddressRequest extends SpeakeasyBase {
    queryParams: GetReleaseAddressQueryParams;
    headers: GetReleaseAddressHeaders;
}
export declare class GetReleaseAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
