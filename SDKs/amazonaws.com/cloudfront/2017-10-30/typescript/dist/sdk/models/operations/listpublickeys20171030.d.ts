import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListPublicKeys20171030QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListPublicKeys20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPublicKeys20171030Request extends SpeakeasyBase {
    queryParams: ListPublicKeys20171030QueryParams;
    headers: ListPublicKeys20171030Headers;
}
export declare class ListPublicKeys20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
