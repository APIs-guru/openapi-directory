import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteLaunchTemplateActionEnum {
    DeleteLaunchTemplate = "DeleteLaunchTemplate"
}
export declare enum PostDeleteLaunchTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteLaunchTemplateQueryParams extends SpeakeasyBase {
    action: PostDeleteLaunchTemplateActionEnum;
    version: PostDeleteLaunchTemplateVersionEnum;
}
export declare class PostDeleteLaunchTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLaunchTemplateRequest extends SpeakeasyBase {
    queryParams: PostDeleteLaunchTemplateQueryParams;
    headers: PostDeleteLaunchTemplateHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLaunchTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
