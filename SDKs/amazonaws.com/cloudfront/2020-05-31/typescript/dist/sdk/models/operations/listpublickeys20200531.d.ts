import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListPublicKeys20200531QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListPublicKeys20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPublicKeys20200531Request extends SpeakeasyBase {
    queryParams: ListPublicKeys20200531QueryParams;
    headers: ListPublicKeys20200531Headers;
}
export declare class ListPublicKeys20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
