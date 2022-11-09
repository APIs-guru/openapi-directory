import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteLaunchTemplateVersionsActionEnum {
    DeleteLaunchTemplateVersions = "DeleteLaunchTemplateVersions"
}
export declare enum PostDeleteLaunchTemplateVersionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteLaunchTemplateVersionsQueryParams extends SpeakeasyBase {
    action: PostDeleteLaunchTemplateVersionsActionEnum;
    version: PostDeleteLaunchTemplateVersionsVersionEnum;
}
export declare class PostDeleteLaunchTemplateVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLaunchTemplateVersionsRequest extends SpeakeasyBase {
    queryParams: PostDeleteLaunchTemplateVersionsQueryParams;
    headers: PostDeleteLaunchTemplateVersionsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLaunchTemplateVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
