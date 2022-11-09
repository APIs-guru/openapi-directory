import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  The location in which Audit Manager saves assessment reports for the given assessment.
**/
export declare class UpdateSettingsRequestBodyDefaultAssessmentReportsDestination extends SpeakeasyBase {
    destination?: string;
    destinationType?: shared.AssessmentReportDestinationTypeEnum;
}
export declare class UpdateSettingsRequestBody extends SpeakeasyBase {
    defaultAssessmentReportsDestination?: UpdateSettingsRequestBodyDefaultAssessmentReportsDestination;
    defaultProcessOwners?: shared.Role[];
    kmsKey?: string;
    snsTopic?: string;
}
export declare class UpdateSettingsRequest extends SpeakeasyBase {
    headers: UpdateSettingsHeaders;
    request: UpdateSettingsRequestBody;
}
export declare class UpdateSettingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    updateSettingsResponse?: shared.UpdateSettingsResponse;
    validationException?: any;
}
