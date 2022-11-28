import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPutConfigurationSetDeliveryOptionsActionEnum {
    PutConfigurationSetDeliveryOptions = "PutConfigurationSetDeliveryOptions"
}
export declare enum PostPutConfigurationSetDeliveryOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostPutConfigurationSetDeliveryOptionsQueryParams extends SpeakeasyBase {
    action: PostPutConfigurationSetDeliveryOptionsActionEnum;
    version: PostPutConfigurationSetDeliveryOptionsVersionEnum;
}
export declare class PostPutConfigurationSetDeliveryOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutConfigurationSetDeliveryOptionsRequest extends SpeakeasyBase {
    queryParams: PostPutConfigurationSetDeliveryOptionsQueryParams;
    headers: PostPutConfigurationSetDeliveryOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostPutConfigurationSetDeliveryOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
