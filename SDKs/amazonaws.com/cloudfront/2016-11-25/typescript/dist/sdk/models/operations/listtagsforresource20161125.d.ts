import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListTagsForResource20161125QueryParams extends SpeakeasyBase {
    resource: string;
}
export declare class ListTagsForResource20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResource20161125Request extends SpeakeasyBase {
    queryParams: ListTagsForResource20161125QueryParams;
    headers: ListTagsForResource20161125Headers;
}
export declare class ListTagsForResource20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
