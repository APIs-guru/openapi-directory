import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResolveAliasXAmzTargetEnum {
    GameLiftResolveAlias = "GameLift.ResolveAlias"
}
export declare class ResolveAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResolveAliasXAmzTargetEnum;
}
export declare class ResolveAliasRequest extends SpeakeasyBase {
    headers: ResolveAliasHeaders;
    request: shared.ResolveAliasInput;
}
export declare class ResolveAliasResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    resolveAliasOutput?: shared.ResolveAliasOutput;
    statusCode: number;
    terminalRoutingStrategyException?: any;
    unauthorizedException?: any;
}
