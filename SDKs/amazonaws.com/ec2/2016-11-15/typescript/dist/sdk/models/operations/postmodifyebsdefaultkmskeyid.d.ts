import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyEbsDefaultKmsKeyIdActionEnum {
    ModifyEbsDefaultKmsKeyId = "ModifyEbsDefaultKmsKeyId"
}
export declare enum PostModifyEbsDefaultKmsKeyIdVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyEbsDefaultKmsKeyIdQueryParams extends SpeakeasyBase {
    action: PostModifyEbsDefaultKmsKeyIdActionEnum;
    version: PostModifyEbsDefaultKmsKeyIdVersionEnum;
}
export declare class PostModifyEbsDefaultKmsKeyIdHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyEbsDefaultKmsKeyIdRequest extends SpeakeasyBase {
    queryParams: PostModifyEbsDefaultKmsKeyIdQueryParams;
    headers: PostModifyEbsDefaultKmsKeyIdHeaders;
    request?: Uint8Array;
}
export declare class PostModifyEbsDefaultKmsKeyIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
