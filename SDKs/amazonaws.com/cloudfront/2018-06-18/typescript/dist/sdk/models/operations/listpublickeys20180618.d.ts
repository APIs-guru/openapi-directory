import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListPublicKeys20180618QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListPublicKeys20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPublicKeys20180618Request extends SpeakeasyBase {
    queryParams: ListPublicKeys20180618QueryParams;
    headers: ListPublicKeys20180618Headers;
}
export declare class ListPublicKeys20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
