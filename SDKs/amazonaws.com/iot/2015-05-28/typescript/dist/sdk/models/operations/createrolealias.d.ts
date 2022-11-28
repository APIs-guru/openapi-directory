import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRoleAliasPathParams extends SpeakeasyBase {
    roleAlias: string;
}
export declare class CreateRoleAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateRoleAliasRequestBody extends SpeakeasyBase {
    credentialDurationSeconds?: number;
    roleArn: string;
    tags?: shared.Tag[];
}
export declare class CreateRoleAliasRequest extends SpeakeasyBase {
    pathParams: CreateRoleAliasPathParams;
    headers: CreateRoleAliasHeaders;
    request: CreateRoleAliasRequestBody;
}
export declare class CreateRoleAliasResponse extends SpeakeasyBase {
    contentType: string;
    createRoleAliasResponse?: shared.CreateRoleAliasResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
