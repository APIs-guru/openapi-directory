import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAgentXAmzTargetEnum {
    FmrsServiceDeleteAgent = "FmrsService.DeleteAgent"
}
export declare class DeleteAgentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAgentXAmzTargetEnum;
}
export declare class DeleteAgentRequest extends SpeakeasyBase {
    headers: DeleteAgentHeaders;
    request: shared.DeleteAgentRequest;
}
export declare class DeleteAgentResponse extends SpeakeasyBase {
    contentType: string;
    deleteAgentResponse?: Map<string, any>;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
