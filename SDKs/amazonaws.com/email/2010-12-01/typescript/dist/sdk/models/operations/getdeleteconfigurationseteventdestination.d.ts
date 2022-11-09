import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteConfigurationSetEventDestinationActionEnum {
    DeleteConfigurationSetEventDestination = "DeleteConfigurationSetEventDestination"
}
export declare enum GetDeleteConfigurationSetEventDestinationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDeleteConfigurationSetEventDestinationQueryParams extends SpeakeasyBase {
    action: GetDeleteConfigurationSetEventDestinationActionEnum;
    configurationSetName: string;
    eventDestinationName: string;
    version: GetDeleteConfigurationSetEventDestinationVersionEnum;
}
export declare class GetDeleteConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    queryParams: GetDeleteConfigurationSetEventDestinationQueryParams;
    headers: GetDeleteConfigurationSetEventDestinationHeaders;
}
export declare class GetDeleteConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
