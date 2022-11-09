import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteConfigurationSetTrackingOptionsActionEnum {
    DeleteConfigurationSetTrackingOptions = "DeleteConfigurationSetTrackingOptions"
}
export declare enum GetDeleteConfigurationSetTrackingOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteConfigurationSetTrackingOptionsQueryParams extends SpeakeasyBase {
    action: GetDeleteConfigurationSetTrackingOptionsActionEnum;
    configurationSetName: string;
    version: GetDeleteConfigurationSetTrackingOptionsVersionEnum;
}
export declare class GetDeleteConfigurationSetTrackingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
    queryParams: GetDeleteConfigurationSetTrackingOptionsQueryParams;
    headers: GetDeleteConfigurationSetTrackingOptionsHeaders;
}
export declare class GetDeleteConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
