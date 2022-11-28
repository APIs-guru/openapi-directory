import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAgentXAmzTargetEnum {
    FmrsServiceCreateAgent = "FmrsService.CreateAgent"
}
export declare class CreateAgentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAgentXAmzTargetEnum;
}
export declare class CreateAgentRequest extends SpeakeasyBase {
    headers: CreateAgentHeaders;
    request: shared.CreateAgentRequest;
}
export declare class CreateAgentResponse extends SpeakeasyBase {
    contentType: string;
    createAgentResponse?: shared.CreateAgentResponse;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
