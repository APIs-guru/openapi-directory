import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetServiceLastAccessedDetailsActionEnum {
    GetServiceLastAccessedDetails = "GetServiceLastAccessedDetails"
}
export declare enum PostGetServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
    action: PostGetServiceLastAccessedDetailsActionEnum;
    version: PostGetServiceLastAccessedDetailsVersionEnum;
}
export declare class PostGetServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetServiceLastAccessedDetailsRequest extends SpeakeasyBase {
    queryParams: PostGetServiceLastAccessedDetailsQueryParams;
    headers: PostGetServiceLastAccessedDetailsHeaders;
    request?: Uint8Array;
}
export declare class PostGetServiceLastAccessedDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
