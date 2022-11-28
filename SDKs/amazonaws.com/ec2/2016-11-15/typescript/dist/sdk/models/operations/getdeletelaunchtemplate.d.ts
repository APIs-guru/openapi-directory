import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteLaunchTemplateActionEnum {
    DeleteLaunchTemplate = "DeleteLaunchTemplate"
}
export declare enum GetDeleteLaunchTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteLaunchTemplateQueryParams extends SpeakeasyBase {
    action: GetDeleteLaunchTemplateActionEnum;
    dryRun?: boolean;
    launchTemplateId?: string;
    launchTemplateName?: string;
    version: GetDeleteLaunchTemplateVersionEnum;
}
export declare class GetDeleteLaunchTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLaunchTemplateRequest extends SpeakeasyBase {
    queryParams: GetDeleteLaunchTemplateQueryParams;
    headers: GetDeleteLaunchTemplateHeaders;
}
export declare class GetDeleteLaunchTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
