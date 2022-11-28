import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopContinuousExportXAmzTargetEnum {
    AwsPoseidonServiceV20151101StopContinuousExport = "AWSPoseidonService_V2015_11_01.StopContinuousExport"
}
export declare class StopContinuousExportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopContinuousExportXAmzTargetEnum;
}
export declare class StopContinuousExportRequest extends SpeakeasyBase {
    headers: StopContinuousExportHeaders;
    request: shared.StopContinuousExportRequest;
}
export declare class StopContinuousExportResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    operationNotPermittedException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverInternalErrorException?: any;
    statusCode: number;
    stopContinuousExportResponse?: shared.StopContinuousExportResponse;
}
