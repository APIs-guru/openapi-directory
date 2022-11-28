import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListTagsForResource20181105QueryParams extends SpeakeasyBase {
    resource: string;
}
export declare class ListTagsForResource20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResource20181105Request extends SpeakeasyBase {
    queryParams: ListTagsForResource20181105QueryParams;
    headers: ListTagsForResource20181105Headers;
}
export declare class ListTagsForResource20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
