import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateControlRequestBody extends SpeakeasyBase {
    actionPlanInstructions?: string;
    actionPlanTitle?: string;
    controlMappingSources: shared.CreateControlMappingSource[];
    description?: string;
    name: string;
    tags?: Map<string, string>;
    testingInformation?: string;
}
export declare class CreateControlRequest extends SpeakeasyBase {
    headers: CreateControlHeaders;
    request: CreateControlRequestBody;
}
export declare class CreateControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createControlResponse?: shared.CreateControlResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
