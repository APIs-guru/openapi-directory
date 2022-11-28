import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAliasXAmzTargetEnum {
    GameLiftCreateAlias = "GameLift.CreateAlias"
}
export declare class CreateAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAliasXAmzTargetEnum;
}
export declare class CreateAliasRequest extends SpeakeasyBase {
    headers: CreateAliasHeaders;
    request: shared.CreateAliasInput;
}
export declare class CreateAliasResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createAliasOutput?: shared.CreateAliasOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    statusCode: number;
    taggingFailedException?: any;
    unauthorizedException?: any;
}
