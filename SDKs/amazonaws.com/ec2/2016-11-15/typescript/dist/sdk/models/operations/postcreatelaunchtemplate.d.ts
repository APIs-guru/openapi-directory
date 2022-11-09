import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateLaunchTemplateActionEnum {
    CreateLaunchTemplate = "CreateLaunchTemplate"
}
export declare enum PostCreateLaunchTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateLaunchTemplateQueryParams extends SpeakeasyBase {
    action: PostCreateLaunchTemplateActionEnum;
    version: PostCreateLaunchTemplateVersionEnum;
}
export declare class PostCreateLaunchTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLaunchTemplateRequest extends SpeakeasyBase {
    queryParams: PostCreateLaunchTemplateQueryParams;
    headers: PostCreateLaunchTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLaunchTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
