import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListInvalidations20181105PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class ListInvalidations20181105QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListInvalidations20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInvalidations20181105Request extends SpeakeasyBase {
    pathParams: ListInvalidations20181105PathParams;
    queryParams: ListInvalidations20181105QueryParams;
    headers: ListInvalidations20181105Headers;
}
export declare class ListInvalidations20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
