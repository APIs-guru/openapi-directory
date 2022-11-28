import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyLaunchTemplateActionEnum {
    ModifyLaunchTemplate = "ModifyLaunchTemplate"
}
export declare enum GetModifyLaunchTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyLaunchTemplateQueryParams extends SpeakeasyBase {
    action: GetModifyLaunchTemplateActionEnum;
    clientToken?: string;
    dryRun?: boolean;
    launchTemplateId?: string;
    launchTemplateName?: string;
    setDefaultVersion?: string;
    version: GetModifyLaunchTemplateVersionEnum;
}
export declare class GetModifyLaunchTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyLaunchTemplateRequest extends SpeakeasyBase {
    queryParams: GetModifyLaunchTemplateQueryParams;
    headers: GetModifyLaunchTemplateHeaders;
}
export declare class GetModifyLaunchTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
