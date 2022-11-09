import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAssessmentFrameworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAssessmentFrameworkRequestBody extends SpeakeasyBase {
    complianceType?: string;
    controlSets: shared.CreateAssessmentFrameworkControlSet[];
    description?: string;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateAssessmentFrameworkRequest extends SpeakeasyBase {
    headers: CreateAssessmentFrameworkHeaders;
    request: CreateAssessmentFrameworkRequestBody;
}
export declare class CreateAssessmentFrameworkResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createAssessmentFrameworkResponse?: shared.CreateAssessmentFrameworkResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
