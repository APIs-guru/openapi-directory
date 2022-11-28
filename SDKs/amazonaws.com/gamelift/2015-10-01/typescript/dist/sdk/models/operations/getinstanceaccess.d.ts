import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstanceAccessXAmzTargetEnum {
    GameLiftGetInstanceAccess = "GameLift.GetInstanceAccess"
}
export declare class GetInstanceAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceAccessXAmzTargetEnum;
}
export declare class GetInstanceAccessRequest extends SpeakeasyBase {
    headers: GetInstanceAccessHeaders;
    request: shared.GetInstanceAccessInput;
}
export declare class GetInstanceAccessResponse extends SpeakeasyBase {
    contentType: string;
    getInstanceAccessOutput?: shared.GetInstanceAccessOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
