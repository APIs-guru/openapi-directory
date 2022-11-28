import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAliasXAmzTargetEnum {
    GameLiftUpdateAlias = "GameLift.UpdateAlias"
}
export declare class UpdateAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAliasXAmzTargetEnum;
}
export declare class UpdateAliasRequest extends SpeakeasyBase {
    headers: UpdateAliasHeaders;
    request: shared.UpdateAliasInput;
}
export declare class UpdateAliasResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateAliasOutput?: shared.UpdateAliasOutput;
}
