import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetPutConfigurationSetDeliveryOptionsActionEnum {
    PutConfigurationSetDeliveryOptions = "PutConfigurationSetDeliveryOptions"
}
/**
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
**/
export declare class GetPutConfigurationSetDeliveryOptionsDeliveryOptions extends SpeakeasyBase {
    tlsPolicy?: shared.TlsPolicyEnum;
}
export declare enum GetPutConfigurationSetDeliveryOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetPutConfigurationSetDeliveryOptionsQueryParams extends SpeakeasyBase {
    action: GetPutConfigurationSetDeliveryOptionsActionEnum;
    configurationSetName: string;
    deliveryOptions?: GetPutConfigurationSetDeliveryOptionsDeliveryOptions;
    version: GetPutConfigurationSetDeliveryOptionsVersionEnum;
}
export declare class GetPutConfigurationSetDeliveryOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutConfigurationSetDeliveryOptionsRequest extends SpeakeasyBase {
    queryParams: GetPutConfigurationSetDeliveryOptionsQueryParams;
    headers: GetPutConfigurationSetDeliveryOptionsHeaders;
}
export declare class GetPutConfigurationSetDeliveryOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
