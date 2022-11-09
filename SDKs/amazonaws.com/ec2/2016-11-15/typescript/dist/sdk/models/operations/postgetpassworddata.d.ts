import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetPasswordDataActionEnum {
    GetPasswordData = "GetPasswordData"
}
export declare enum PostGetPasswordDataVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetPasswordDataQueryParams extends SpeakeasyBase {
    action: PostGetPasswordDataActionEnum;
    version: PostGetPasswordDataVersionEnum;
}
export declare class PostGetPasswordDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetPasswordDataRequest extends SpeakeasyBase {
    queryParams: PostGetPasswordDataQueryParams;
    headers: PostGetPasswordDataHeaders;
    request?: Uint8Array;
}
export declare class PostGetPasswordDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
