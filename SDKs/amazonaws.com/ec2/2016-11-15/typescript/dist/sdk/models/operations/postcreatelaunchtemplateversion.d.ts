import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateLaunchTemplateVersionActionEnum {
    CreateLaunchTemplateVersion = "CreateLaunchTemplateVersion"
}
export declare enum PostCreateLaunchTemplateVersionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateLaunchTemplateVersionQueryParams extends SpeakeasyBase {
    action: PostCreateLaunchTemplateVersionActionEnum;
    version: PostCreateLaunchTemplateVersionVersionEnum;
}
export declare class PostCreateLaunchTemplateVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateLaunchTemplateVersionRequest extends SpeakeasyBase {
    queryParams: PostCreateLaunchTemplateVersionQueryParams;
    headers: PostCreateLaunchTemplateVersionHeaders;
    request?: Uint8Array;
}
export declare class PostCreateLaunchTemplateVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
