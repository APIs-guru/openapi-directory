import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetSettingsAttributeEnum {
    All = "ALL",
    IsAwsOrgEnabled = "IS_AWS_ORG_ENABLED",
    SnsTopic = "SNS_TOPIC",
    DefaultAssessmentReportsDestination = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION",
    DefaultProcessOwners = "DEFAULT_PROCESS_OWNERS"
}
export declare class GetSettingsPathParams extends SpeakeasyBase {
    attribute: GetSettingsAttributeEnum;
}
export declare class GetSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSettingsRequest extends SpeakeasyBase {
    pathParams: GetSettingsPathParams;
    headers: GetSettingsHeaders;
}
export declare class GetSettingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getSettingsResponse?: shared.GetSettingsResponse;
    internalServerException?: any;
    statusCode: number;
}
