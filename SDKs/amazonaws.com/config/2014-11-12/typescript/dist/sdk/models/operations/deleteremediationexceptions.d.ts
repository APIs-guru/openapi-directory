import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRemediationExceptionsXAmzTargetEnum {
    StarlingDoveServiceDeleteRemediationExceptions = "StarlingDoveService.DeleteRemediationExceptions"
}
export declare class DeleteRemediationExceptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRemediationExceptionsXAmzTargetEnum;
}
export declare class DeleteRemediationExceptionsRequest extends SpeakeasyBase {
    headers: DeleteRemediationExceptionsHeaders;
    request: shared.DeleteRemediationExceptionsRequest;
}
export declare class DeleteRemediationExceptionsResponse extends SpeakeasyBase {
    contentType: string;
    deleteRemediationExceptionsResponse?: shared.DeleteRemediationExceptionsResponse;
    noSuchRemediationExceptionException?: any;
    statusCode: number;
}
