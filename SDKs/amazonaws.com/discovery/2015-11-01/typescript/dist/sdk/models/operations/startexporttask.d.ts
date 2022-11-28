import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartExportTaskXAmzTargetEnum {
    AwsPoseidonServiceV20151101StartExportTask = "AWSPoseidonService_V2015_11_01.StartExportTask"
}
export declare class StartExportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartExportTaskXAmzTargetEnum;
}
export declare class StartExportTaskRequest extends SpeakeasyBase {
    headers: StartExportTaskHeaders;
    request: shared.StartExportTaskRequest;
}
export declare class StartExportTaskResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    operationNotPermittedException?: any;
    serverInternalErrorException?: any;
    startExportTaskResponse?: shared.StartExportTaskResponse;
    statusCode: number;
}
