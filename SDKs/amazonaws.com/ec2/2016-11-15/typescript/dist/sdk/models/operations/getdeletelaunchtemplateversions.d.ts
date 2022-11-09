import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteLaunchTemplateVersionsActionEnum {
    DeleteLaunchTemplateVersions = "DeleteLaunchTemplateVersions"
}
export declare enum GetDeleteLaunchTemplateVersionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteLaunchTemplateVersionsQueryParams extends SpeakeasyBase {
    action: GetDeleteLaunchTemplateVersionsActionEnum;
    dryRun?: boolean;
    launchTemplateId?: string;
    launchTemplateName?: string;
    launchTemplateVersion: string[];
    version: GetDeleteLaunchTemplateVersionsVersionEnum;
}
export declare class GetDeleteLaunchTemplateVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLaunchTemplateVersionsRequest extends SpeakeasyBase {
    queryParams: GetDeleteLaunchTemplateVersionsQueryParams;
    headers: GetDeleteLaunchTemplateVersionsHeaders;
}
export declare class GetDeleteLaunchTemplateVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
