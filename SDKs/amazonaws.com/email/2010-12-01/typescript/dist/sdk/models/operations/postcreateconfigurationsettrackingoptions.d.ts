import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateConfigurationSetTrackingOptionsActionEnum {
    CreateConfigurationSetTrackingOptions = "CreateConfigurationSetTrackingOptions"
}
export declare enum PostCreateConfigurationSetTrackingOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateConfigurationSetTrackingOptionsQueryParams extends SpeakeasyBase {
    action: PostCreateConfigurationSetTrackingOptionsActionEnum;
    version: PostCreateConfigurationSetTrackingOptionsVersionEnum;
}
export declare class PostCreateConfigurationSetTrackingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
    queryParams: PostCreateConfigurationSetTrackingOptionsQueryParams;
    headers: PostCreateConfigurationSetTrackingOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostCreateConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
