import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetEbsDefaultKmsKeyIdActionEnum {
    GetEbsDefaultKmsKeyId = "GetEbsDefaultKmsKeyId"
}
export declare enum PostGetEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostGetEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
    action: PostGetEbsDefaultKmsKeyIdActionEnum;
    version: PostGetEbsDefaultKmsKeyIdVersionEnum;
}
export declare class PostGetEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
    queryParams: PostGetEbsDefaultKmsKeyIdQueryParams;
    headers: PostGetEbsDefaultKmsKeyIdHeaders;
    request?: Uint8Array;
}
export declare class PostGetEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
