import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListTagsForResource20190326QueryParams extends SpeakeasyBase {
    resource: string;
}
export declare class ListTagsForResource20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResource20190326Request extends SpeakeasyBase {
    queryParams: ListTagsForResource20190326QueryParams;
    headers: ListTagsForResource20190326Headers;
}
export declare class ListTagsForResource20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
