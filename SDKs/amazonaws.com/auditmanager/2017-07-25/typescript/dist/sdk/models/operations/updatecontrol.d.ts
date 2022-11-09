import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateControlPathParams extends SpeakeasyBase {
    controlId: string;
}
export declare class UpdateControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateControlRequestBody extends SpeakeasyBase {
    actionPlanInstructions?: string;
    actionPlanTitle?: string;
    controlMappingSources: shared.ControlMappingSource[];
    description?: string;
    name: string;
    testingInformation?: string;
}
export declare class UpdateControlRequest extends SpeakeasyBase {
    pathParams: UpdateControlPathParams;
    headers: UpdateControlHeaders;
    request: UpdateControlRequestBody;
}
export declare class UpdateControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateControlResponse?: shared.UpdateControlResponse;
    validationException?: any;
}
