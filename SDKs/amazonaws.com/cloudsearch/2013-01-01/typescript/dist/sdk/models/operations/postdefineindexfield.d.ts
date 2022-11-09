import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDefineIndexFieldActionEnum {
    DefineIndexField = "DefineIndexField"
}
export declare enum PostDefineIndexFieldVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostDefineIndexFieldQueryParams extends SpeakeasyBase {
    action: PostDefineIndexFieldActionEnum;
    version: PostDefineIndexFieldVersionEnum;
}
export declare class PostDefineIndexFieldHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDefineIndexFieldRequest extends SpeakeasyBase {
    queryParams: PostDefineIndexFieldQueryParams;
    headers: PostDefineIndexFieldHeaders;
    request?: Uint8Array;
}
export declare class PostDefineIndexFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
