import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetAccountAuthorizationDetailsActionEnum {
    GetAccountAuthorizationDetails = "GetAccountAuthorizationDetails"
}
export declare enum PostGetAccountAuthorizationDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetAccountAuthorizationDetailsQueryParams extends SpeakeasyBase {
    action: PostGetAccountAuthorizationDetailsActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostGetAccountAuthorizationDetailsVersionEnum;
}
export declare class PostGetAccountAuthorizationDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetAccountAuthorizationDetailsRequest extends SpeakeasyBase {
    queryParams: PostGetAccountAuthorizationDetailsQueryParams;
    headers: PostGetAccountAuthorizationDetailsHeaders;
    request?: Uint8Array;
}
export declare class PostGetAccountAuthorizationDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
