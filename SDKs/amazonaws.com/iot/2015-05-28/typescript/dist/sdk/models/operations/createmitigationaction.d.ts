import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMitigationActionPathParams extends SpeakeasyBase {
    actionName: string;
}
export declare class CreateMitigationActionHeaders extends SpeakeasyBase {
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
export declare class CreateMitigationActionRequestBodyActionParams extends SpeakeasyBase {
    addThingsToThingGroupParams?: shared.AddThingsToThingGroupParams;
    enableIoTLoggingParams?: shared.EnableIoTLoggingParams;
    publishFindingToSnsParams?: shared.PublishFindingToSnsParams;
    replaceDefaultPolicyVersionParams?: shared.ReplaceDefaultPolicyVersionParams;
    updateCaCertificateParams?: shared.UpdateCaCertificateParams;
    updateDeviceCertificateParams?: shared.UpdateDeviceCertificateParams;
}
export declare class CreateMitigationActionRequestBody extends SpeakeasyBase {
    actionParams: CreateMitigationActionRequestBodyActionParams;
    roleArn: string;
    tags?: shared.Tag[];
}
export declare class CreateMitigationActionRequest extends SpeakeasyBase {
    pathParams: CreateMitigationActionPathParams;
    headers: CreateMitigationActionHeaders;
    request: CreateMitigationActionRequestBody;
}
export declare class CreateMitigationActionResponse extends SpeakeasyBase {
    contentType: string;
    createMitigationActionResponse?: shared.CreateMitigationActionResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
