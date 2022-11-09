import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListInvalidations20170325PathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class ListInvalidations20170325QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListInvalidations20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInvalidations20170325Request extends SpeakeasyBase {
    pathParams: ListInvalidations20170325PathParams;
    queryParams: ListInvalidations20170325QueryParams;
    headers: ListInvalidations20170325Headers;
}
export declare class ListInvalidations20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
