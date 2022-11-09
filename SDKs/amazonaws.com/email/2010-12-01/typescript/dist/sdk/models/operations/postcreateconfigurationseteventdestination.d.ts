import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateConfigurationSetEventDestinationActionEnum {
    CreateConfigurationSetEventDestination = "CreateConfigurationSetEventDestination"
}
export declare enum PostCreateConfigurationSetEventDestinationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateConfigurationSetEventDestinationQueryParams extends SpeakeasyBase {
    action: PostCreateConfigurationSetEventDestinationActionEnum;
    version: PostCreateConfigurationSetEventDestinationVersionEnum;
}
export declare class PostCreateConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    queryParams: PostCreateConfigurationSetEventDestinationQueryParams;
    headers: PostCreateConfigurationSetEventDestinationHeaders;
    request?: Uint8Array;
}
export declare class PostCreateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
