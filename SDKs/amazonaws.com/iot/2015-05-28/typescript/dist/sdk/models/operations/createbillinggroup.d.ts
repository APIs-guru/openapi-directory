import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBillingGroupPathParams extends SpeakeasyBase {
    billingGroupName: string;
}
export declare class CreateBillingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The properties of a billing group.
**/
export declare class CreateBillingGroupRequestBodyBillingGroupProperties extends SpeakeasyBase {
    billingGroupDescription?: string;
}
export declare class CreateBillingGroupRequestBody extends SpeakeasyBase {
    billingGroupProperties?: CreateBillingGroupRequestBodyBillingGroupProperties;
    tags?: shared.Tag[];
}
export declare class CreateBillingGroupRequest extends SpeakeasyBase {
    pathParams: CreateBillingGroupPathParams;
    headers: CreateBillingGroupHeaders;
    request: CreateBillingGroupRequestBody;
}
export declare class CreateBillingGroupResponse extends SpeakeasyBase {
    contentType: string;
    createBillingGroupResponse?: shared.CreateBillingGroupResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
