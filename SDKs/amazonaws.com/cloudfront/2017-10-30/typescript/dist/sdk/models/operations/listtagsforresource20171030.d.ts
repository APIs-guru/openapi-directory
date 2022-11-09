import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListTagsForResource20171030QueryParams extends SpeakeasyBase {
    resource: string;
}
export declare class ListTagsForResource20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResource20171030Request extends SpeakeasyBase {
    queryParams: ListTagsForResource20171030QueryParams;
    headers: ListTagsForResource20171030Headers;
}
export declare class ListTagsForResource20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
