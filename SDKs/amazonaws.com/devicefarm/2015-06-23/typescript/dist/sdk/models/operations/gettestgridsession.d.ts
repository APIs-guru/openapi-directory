import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTestGridSessionXAmzTargetEnum {
    DeviceFarm20150623GetTestGridSession = "DeviceFarm_20150623.GetTestGridSession"
}
export declare class GetTestGridSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTestGridSessionXAmzTargetEnum;
}
export declare class GetTestGridSessionRequest extends SpeakeasyBase {
    headers: GetTestGridSessionHeaders;
    request: shared.GetTestGridSessionRequest;
}
export declare class GetTestGridSessionResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getTestGridSessionResult?: shared.GetTestGridSessionResult;
    internalServiceException?: any;
    notFoundException?: any;
    statusCode: number;
}
