import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAliasXAmzTargetEnum {
    GameLiftDeleteAlias = "GameLift.DeleteAlias"
}
export declare class DeleteAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAliasXAmzTargetEnum;
}
export declare class DeleteAliasRequest extends SpeakeasyBase {
    headers: DeleteAliasHeaders;
    request: shared.DeleteAliasInput;
}
export declare class DeleteAliasResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
