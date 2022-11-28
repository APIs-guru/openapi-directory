import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DisassociateAdminAccountXAmzTargetEnum {
    Awsfms20180101DisassociateAdminAccount = "AWSFMS_20180101.DisassociateAdminAccount"
}
export declare class DisassociateAdminAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateAdminAccountXAmzTargetEnum;
}
export declare class DisassociateAdminAccountRequest extends SpeakeasyBase {
    headers: DisassociateAdminAccountHeaders;
    request: Map<string, any>;
}
export declare class DisassociateAdminAccountResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
