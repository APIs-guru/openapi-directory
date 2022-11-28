import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateConfigurationSetEventDestinationActionEnum {
    UpdateConfigurationSetEventDestination = "UpdateConfigurationSetEventDestination"
}
export declare enum PostUpdateConfigurationSetEventDestinationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateConfigurationSetEventDestinationQueryParams extends SpeakeasyBase {
    action: PostUpdateConfigurationSetEventDestinationActionEnum;
    version: PostUpdateConfigurationSetEventDestinationVersionEnum;
}
export declare class PostUpdateConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    queryParams: PostUpdateConfigurationSetEventDestinationQueryParams;
    headers: PostUpdateConfigurationSetEventDestinationHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
