import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListTagsForResource20180618QueryParams extends SpeakeasyBase {
    resource: string;
}
export declare class ListTagsForResource20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResource20180618Request extends SpeakeasyBase {
    queryParams: ListTagsForResource20180618QueryParams;
    headers: ListTagsForResource20180618Headers;
}
export declare class ListTagsForResource20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
