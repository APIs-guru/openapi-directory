import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListTagsForResource20200531QueryParams extends SpeakeasyBase {
    resource: string;
}
export declare class ListTagsForResource20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResource20200531Request extends SpeakeasyBase {
    queryParams: ListTagsForResource20200531QueryParams;
    headers: ListTagsForResource20200531Headers;
}
export declare class ListTagsForResource20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
