import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAddonPathParams extends SpeakeasyBase {
    addonName: string;
    name: string;
}
export declare class UpdateAddonHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateAddonRequestBodyResolveConflictsEnum {
    Overwrite = "OVERWRITE",
    None = "NONE"
}
export declare class UpdateAddonRequestBody extends SpeakeasyBase {
    addonVersion?: string;
    clientRequestToken?: string;
    resolveConflicts?: UpdateAddonRequestBodyResolveConflictsEnum;
    serviceAccountRoleArn?: string;
}
export declare class UpdateAddonRequest extends SpeakeasyBase {
    pathParams: UpdateAddonPathParams;
    headers: UpdateAddonHeaders;
    request: UpdateAddonRequestBody;
}
export declare class UpdateAddonResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    updateAddonResponse?: shared.UpdateAddonResponse;
}
