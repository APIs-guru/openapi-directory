import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResetEbsDefaultKmsKeyIdActionEnum {
    ResetEbsDefaultKmsKeyId = "ResetEbsDefaultKmsKeyId"
}
export declare enum PostResetEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostResetEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
    action: PostResetEbsDefaultKmsKeyIdActionEnum;
    version: PostResetEbsDefaultKmsKeyIdVersionEnum;
}
export declare class PostResetEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
    queryParams: PostResetEbsDefaultKmsKeyIdQueryParams;
    headers: PostResetEbsDefaultKmsKeyIdHeaders;
    request?: Uint8Array;
}
export declare class PostResetEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
