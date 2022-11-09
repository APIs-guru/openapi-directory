import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateStopwordOptionsActionEnum {
    UpdateStopwordOptions = "UpdateStopwordOptions"
}
export declare enum PostUpdateStopwordOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostUpdateStopwordOptionsQueryParams extends SpeakeasyBase {
    action: PostUpdateStopwordOptionsActionEnum;
    version: PostUpdateStopwordOptionsVersionEnum;
}
export declare class PostUpdateStopwordOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateStopwordOptionsRequest extends SpeakeasyBase {
    queryParams: PostUpdateStopwordOptionsQueryParams;
    headers: PostUpdateStopwordOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateStopwordOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
