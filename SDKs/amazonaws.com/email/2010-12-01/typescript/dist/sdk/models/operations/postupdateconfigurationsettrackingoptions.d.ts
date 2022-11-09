import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateConfigurationSetTrackingOptionsActionEnum {
    UpdateConfigurationSetTrackingOptions = "UpdateConfigurationSetTrackingOptions"
}
export declare enum PostUpdateConfigurationSetTrackingOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateConfigurationSetTrackingOptionsQueryParams extends SpeakeasyBase {
    action: PostUpdateConfigurationSetTrackingOptionsActionEnum;
    version: PostUpdateConfigurationSetTrackingOptionsVersionEnum;
}
export declare class PostUpdateConfigurationSetTrackingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
    queryParams: PostUpdateConfigurationSetTrackingOptionsQueryParams;
    headers: PostUpdateConfigurationSetTrackingOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
