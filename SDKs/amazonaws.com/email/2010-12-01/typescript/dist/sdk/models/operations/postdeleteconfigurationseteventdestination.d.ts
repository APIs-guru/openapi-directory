import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteConfigurationSetEventDestinationActionEnum {
    DeleteConfigurationSetEventDestination = "DeleteConfigurationSetEventDestination"
}
export declare enum PostDeleteConfigurationSetEventDestinationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteConfigurationSetEventDestinationQueryParams extends SpeakeasyBase {
    action: PostDeleteConfigurationSetEventDestinationActionEnum;
    version: PostDeleteConfigurationSetEventDestinationVersionEnum;
}
export declare class PostDeleteConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    queryParams: PostDeleteConfigurationSetEventDestinationQueryParams;
    headers: PostDeleteConfigurationSetEventDestinationHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
