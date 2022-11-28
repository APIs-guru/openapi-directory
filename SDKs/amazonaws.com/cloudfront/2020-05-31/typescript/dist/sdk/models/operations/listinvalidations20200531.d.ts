import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListInvalidations20200531PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class ListInvalidations20200531QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListInvalidations20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInvalidations20200531Request extends SpeakeasyBase {
    pathParams: ListInvalidations20200531PathParams;
    queryParams: ListInvalidations20200531QueryParams;
    headers: ListInvalidations20200531Headers;
}
export declare class ListInvalidations20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
