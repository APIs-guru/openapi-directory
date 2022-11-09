import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAddonPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateAddonHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateAddonRequestBodyResolveConflictsEnum {
    Overwrite = "OVERWRITE",
    None = "NONE"
}
export declare class CreateAddonRequestBody extends SpeakeasyBase {
    addonName: string;
    addonVersion?: string;
    clientRequestToken?: string;
    resolveConflicts?: CreateAddonRequestBodyResolveConflictsEnum;
    serviceAccountRoleArn?: string;
    tags?: Map<string, string>;
}
export declare class CreateAddonRequest extends SpeakeasyBase {
    pathParams: CreateAddonPathParams;
    headers: CreateAddonHeaders;
    request: CreateAddonRequestBody;
}
export declare class CreateAddonResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createAddonResponse?: shared.CreateAddonResponse;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
