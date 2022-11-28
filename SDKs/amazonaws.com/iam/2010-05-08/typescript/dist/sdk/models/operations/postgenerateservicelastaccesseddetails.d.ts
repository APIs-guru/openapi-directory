import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGenerateServiceLastAccessedDetailsActionEnum {
    GenerateServiceLastAccessedDetails = "GenerateServiceLastAccessedDetails"
}
export declare enum PostGenerateServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGenerateServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
    action: PostGenerateServiceLastAccessedDetailsActionEnum;
    version: PostGenerateServiceLastAccessedDetailsVersionEnum;
}
export declare class PostGenerateServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGenerateServiceLastAccessedDetailsRequest extends SpeakeasyBase {
    queryParams: PostGenerateServiceLastAccessedDetailsQueryParams;
    headers: PostGenerateServiceLastAccessedDetailsHeaders;
    request?: Uint8Array;
}
export declare class PostGenerateServiceLastAccessedDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
