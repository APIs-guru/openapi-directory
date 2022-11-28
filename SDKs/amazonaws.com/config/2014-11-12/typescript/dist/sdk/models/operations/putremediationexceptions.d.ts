import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRemediationExceptionsXAmzTargetEnum {
    StarlingDoveServicePutRemediationExceptions = "StarlingDoveService.PutRemediationExceptions"
}
export declare class PutRemediationExceptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRemediationExceptionsXAmzTargetEnum;
}
export declare class PutRemediationExceptionsRequest extends SpeakeasyBase {
    headers: PutRemediationExceptionsHeaders;
    request: shared.PutRemediationExceptionsRequest;
}
export declare class PutRemediationExceptionsResponse extends SpeakeasyBase {
    contentType: string;
    insufficientPermissionsException?: any;
    invalidParameterValueException?: any;
    putRemediationExceptionsResponse?: shared.PutRemediationExceptionsResponse;
    statusCode: number;
}
