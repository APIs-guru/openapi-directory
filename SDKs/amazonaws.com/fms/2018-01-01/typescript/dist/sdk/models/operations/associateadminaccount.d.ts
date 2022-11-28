import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateAdminAccountXAmzTargetEnum {
    Awsfms20180101AssociateAdminAccount = "AWSFMS_20180101.AssociateAdminAccount"
}
export declare class AssociateAdminAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateAdminAccountXAmzTargetEnum;
}
export declare class AssociateAdminAccountRequest extends SpeakeasyBase {
    headers: AssociateAdminAccountHeaders;
    request: shared.AssociateAdminAccountRequest;
}
export declare class AssociateAdminAccountResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidInputException?: any;
    invalidOperationException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
