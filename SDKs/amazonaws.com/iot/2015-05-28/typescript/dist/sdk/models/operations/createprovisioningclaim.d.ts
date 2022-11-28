import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProvisioningClaimPathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class CreateProvisioningClaimHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateProvisioningClaimRequest extends SpeakeasyBase {
    pathParams: CreateProvisioningClaimPathParams;
    headers: CreateProvisioningClaimHeaders;
}
export declare class CreateProvisioningClaimResponse extends SpeakeasyBase {
    contentType: string;
    createProvisioningClaimResponse?: shared.CreateProvisioningClaimResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
