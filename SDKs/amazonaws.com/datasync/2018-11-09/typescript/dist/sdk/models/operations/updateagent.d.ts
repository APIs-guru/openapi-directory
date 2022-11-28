import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAgentXAmzTargetEnum {
    FmrsServiceUpdateAgent = "FmrsService.UpdateAgent"
}
export declare class UpdateAgentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAgentXAmzTargetEnum;
}
export declare class UpdateAgentRequest extends SpeakeasyBase {
    headers: UpdateAgentHeaders;
    request: shared.UpdateAgentRequest;
}
export declare class UpdateAgentResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
    updateAgentResponse?: Map<string, any>;
}
