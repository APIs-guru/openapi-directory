import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteFargateProfilePathParams extends SpeakeasyBase {
    fargateProfileName: string;
    name: string;
}
export declare class DeleteFargateProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFargateProfileRequest extends SpeakeasyBase {
    pathParams: DeleteFargateProfilePathParams;
    headers: DeleteFargateProfileHeaders;
}
export declare class DeleteFargateProfileResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deleteFargateProfileResponse?: shared.DeleteFargateProfileResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
