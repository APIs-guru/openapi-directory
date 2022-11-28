import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMitigationActionPathParams extends SpeakeasyBase {
    actionName: string;
}
export declare class UpdateMitigationActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
**/
export declare class UpdateMitigationActionRequestBodyActionParams extends SpeakeasyBase {
    addThingsToThingGroupParams?: shared.AddThingsToThingGroupParams;
    enableIoTLoggingParams?: shared.EnableIoTLoggingParams;
    publishFindingToSnsParams?: shared.PublishFindingToSnsParams;
    replaceDefaultPolicyVersionParams?: shared.ReplaceDefaultPolicyVersionParams;
    updateCaCertificateParams?: shared.UpdateCaCertificateParams;
    updateDeviceCertificateParams?: shared.UpdateDeviceCertificateParams;
}
export declare class UpdateMitigationActionRequestBody extends SpeakeasyBase {
    actionParams?: UpdateMitigationActionRequestBodyActionParams;
    roleArn?: string;
}
export declare class UpdateMitigationActionRequest extends SpeakeasyBase {
    pathParams: UpdateMitigationActionPathParams;
    headers: UpdateMitigationActionHeaders;
    request: UpdateMitigationActionRequestBody;
}
export declare class UpdateMitigationActionResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateMitigationActionResponse?: shared.UpdateMitigationActionResponse;
}
