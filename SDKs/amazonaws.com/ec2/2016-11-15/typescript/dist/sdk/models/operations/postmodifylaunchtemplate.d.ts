import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyLaunchTemplateActionEnum {
    ModifyLaunchTemplate = "ModifyLaunchTemplate"
}
export declare enum PostModifyLaunchTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyLaunchTemplateQueryParams extends SpeakeasyBase {
    action: PostModifyLaunchTemplateActionEnum;
    version: PostModifyLaunchTemplateVersionEnum;
}
export declare class PostModifyLaunchTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyLaunchTemplateRequest extends SpeakeasyBase {
    queryParams: PostModifyLaunchTemplateQueryParams;
    headers: PostModifyLaunchTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostModifyLaunchTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
