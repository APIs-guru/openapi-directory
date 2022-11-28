import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServiceStopConfigurationRecorder = "StarlingDoveService.StopConfigurationRecorder"
}
export declare class StopConfigurationRecorderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopConfigurationRecorderXAmzTargetEnum;
}
export declare class StopConfigurationRecorderRequest extends SpeakeasyBase {
    headers: StopConfigurationRecorderHeaders;
    request: shared.StopConfigurationRecorderRequest;
}
export declare class StopConfigurationRecorderResponse extends SpeakeasyBase {
    contentType: string;
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
}
