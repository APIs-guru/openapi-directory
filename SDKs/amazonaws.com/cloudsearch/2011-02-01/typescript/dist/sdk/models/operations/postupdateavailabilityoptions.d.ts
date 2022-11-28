import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateAvailabilityOptionsActionEnum {
    UpdateAvailabilityOptions = "UpdateAvailabilityOptions"
}
export declare enum PostUpdateAvailabilityOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostUpdateAvailabilityOptionsQueryParams extends SpeakeasyBase {
    action: PostUpdateAvailabilityOptionsActionEnum;
    version: PostUpdateAvailabilityOptionsVersionEnum;
}
export declare class PostUpdateAvailabilityOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateAvailabilityOptionsRequest extends SpeakeasyBase {
    queryParams: PostUpdateAvailabilityOptionsQueryParams;
    headers: PostUpdateAvailabilityOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateAvailabilityOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
