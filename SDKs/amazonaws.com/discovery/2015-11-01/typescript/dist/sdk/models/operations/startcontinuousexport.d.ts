import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartContinuousExportXAmzTargetEnum {
    AwsPoseidonServiceV20151101StartContinuousExport = "AWSPoseidonService_V2015_11_01.StartContinuousExport"
}
export declare class StartContinuousExportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartContinuousExportXAmzTargetEnum;
}
export declare class StartContinuousExportRequest extends SpeakeasyBase {
    headers: StartContinuousExportHeaders;
    request: Map<string, any>;
}
export declare class StartContinuousExportResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    conflictErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    operationNotPermittedException?: any;
    resourceInUseException?: any;
    serverInternalErrorException?: any;
    startContinuousExportResponse?: shared.StartContinuousExportResponse;
    statusCode: number;
}
