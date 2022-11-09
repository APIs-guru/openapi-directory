import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateStemmingOptionsActionEnum {
    UpdateStemmingOptions = "UpdateStemmingOptions"
}
export declare enum PostUpdateStemmingOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostUpdateStemmingOptionsQueryParams extends SpeakeasyBase {
    action: PostUpdateStemmingOptionsActionEnum;
    version: PostUpdateStemmingOptionsVersionEnum;
}
export declare class PostUpdateStemmingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateStemmingOptionsRequest extends SpeakeasyBase {
    queryParams: PostUpdateStemmingOptionsQueryParams;
    headers: PostUpdateStemmingOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateStemmingOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
