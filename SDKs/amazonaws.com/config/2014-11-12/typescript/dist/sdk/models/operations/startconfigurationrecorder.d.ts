import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServiceStartConfigurationRecorder = "StarlingDoveService.StartConfigurationRecorder"
}
export declare class StartConfigurationRecorderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartConfigurationRecorderXAmzTargetEnum;
}
export declare class StartConfigurationRecorderRequest extends SpeakeasyBase {
    headers: StartConfigurationRecorderHeaders;
    request: shared.StartConfigurationRecorderRequest;
}
export declare class StartConfigurationRecorderResponse extends SpeakeasyBase {
    contentType: string;
    noAvailableDeliveryChannelException?: any;
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
}
