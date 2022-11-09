import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateAssumeRolePolicyActionEnum {
    UpdateAssumeRolePolicy = "UpdateAssumeRolePolicy"
}
export declare enum PostUpdateAssumeRolePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateAssumeRolePolicyQueryParams extends SpeakeasyBase {
    action: PostUpdateAssumeRolePolicyActionEnum;
    version: PostUpdateAssumeRolePolicyVersionEnum;
}
export declare class PostUpdateAssumeRolePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateAssumeRolePolicyRequest extends SpeakeasyBase {
    queryParams: PostUpdateAssumeRolePolicyQueryParams;
    headers: PostUpdateAssumeRolePolicyHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateAssumeRolePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
