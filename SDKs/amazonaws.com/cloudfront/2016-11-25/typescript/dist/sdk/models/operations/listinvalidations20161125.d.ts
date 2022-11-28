import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListInvalidations20161125PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class ListInvalidations20161125QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListInvalidations20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInvalidations20161125Request extends SpeakeasyBase {
    pathParams: ListInvalidations20161125PathParams;
    queryParams: ListInvalidations20161125QueryParams;
    headers: ListInvalidations20161125Headers;
}
export declare class ListInvalidations20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
