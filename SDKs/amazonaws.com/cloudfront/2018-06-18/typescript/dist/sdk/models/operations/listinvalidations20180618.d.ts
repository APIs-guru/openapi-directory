import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListInvalidations20180618PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class ListInvalidations20180618QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListInvalidations20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInvalidations20180618Request extends SpeakeasyBase {
    pathParams: ListInvalidations20180618PathParams;
    queryParams: ListInvalidations20180618QueryParams;
    headers: ListInvalidations20180618Headers;
}
export declare class ListInvalidations20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
