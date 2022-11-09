import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartImportTaskXAmzTargetEnum {
    AwsPoseidonServiceV20151101StartImportTask = "AWSPoseidonService_V2015_11_01.StartImportTask"
}
export declare class StartImportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartImportTaskXAmzTargetEnum;
}
export declare class StartImportTaskRequest extends SpeakeasyBase {
    headers: StartImportTaskHeaders;
    request: shared.StartImportTaskRequest;
}
export declare class StartImportTaskResponse extends SpeakeasyBase {
    authorizationErrorException?: any;
    contentType: string;
    homeRegionNotSetException?: any;
    invalidParameterException?: any;
    invalidParameterValueException?: any;
    resourceInUseException?: any;
    serverInternalErrorException?: any;
    startImportTaskResponse?: shared.StartImportTaskResponse;
    statusCode: number;
}
