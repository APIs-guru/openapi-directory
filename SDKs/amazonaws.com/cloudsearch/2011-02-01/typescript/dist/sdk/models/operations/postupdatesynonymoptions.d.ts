import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateSynonymOptionsActionEnum {
    UpdateSynonymOptions = "UpdateSynonymOptions"
}
export declare enum PostUpdateSynonymOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostUpdateSynonymOptionsQueryParams extends SpeakeasyBase {
    action: PostUpdateSynonymOptionsActionEnum;
    version: PostUpdateSynonymOptionsVersionEnum;
}
export declare class PostUpdateSynonymOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateSynonymOptionsRequest extends SpeakeasyBase {
    queryParams: PostUpdateSynonymOptionsQueryParams;
    headers: PostUpdateSynonymOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateSynonymOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
