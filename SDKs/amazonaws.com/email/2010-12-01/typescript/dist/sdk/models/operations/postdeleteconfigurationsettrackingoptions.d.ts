import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteConfigurationSetTrackingOptionsActionEnum {
    DeleteConfigurationSetTrackingOptions = "DeleteConfigurationSetTrackingOptions"
}
export declare enum PostDeleteConfigurationSetTrackingOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteConfigurationSetTrackingOptionsQueryParams extends SpeakeasyBase {
    action: PostDeleteConfigurationSetTrackingOptionsActionEnum;
    version: PostDeleteConfigurationSetTrackingOptionsVersionEnum;
}
export declare class PostDeleteConfigurationSetTrackingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
    queryParams: PostDeleteConfigurationSetTrackingOptionsQueryParams;
    headers: PostDeleteConfigurationSetTrackingOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
