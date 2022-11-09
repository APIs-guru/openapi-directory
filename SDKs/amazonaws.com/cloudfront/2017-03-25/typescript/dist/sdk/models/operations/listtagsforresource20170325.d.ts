import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListTagsForResource20170325QueryParams extends SpeakeasyBase {
    resource: string;
}
export declare class ListTagsForResource20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResource20170325Request extends SpeakeasyBase {
    queryParams: ListTagsForResource20170325QueryParams;
    headers: ListTagsForResource20170325Headers;
}
export declare class ListTagsForResource20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
