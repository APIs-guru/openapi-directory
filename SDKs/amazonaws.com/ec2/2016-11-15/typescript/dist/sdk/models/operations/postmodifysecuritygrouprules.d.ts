import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifySecurityGroupRulesActionEnum {
    ModifySecurityGroupRules = "ModifySecurityGroupRules"
}
export declare enum PostModifySecurityGroupRulesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifySecurityGroupRulesQueryParams extends SpeakeasyBase {
    action: PostModifySecurityGroupRulesActionEnum;
    version: PostModifySecurityGroupRulesVersionEnum;
}
export declare class PostModifySecurityGroupRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifySecurityGroupRulesRequest extends SpeakeasyBase {
    queryParams: PostModifySecurityGroupRulesQueryParams;
    headers: PostModifySecurityGroupRulesHeaders;
    request?: Uint8Array;
}
export declare class PostModifySecurityGroupRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
