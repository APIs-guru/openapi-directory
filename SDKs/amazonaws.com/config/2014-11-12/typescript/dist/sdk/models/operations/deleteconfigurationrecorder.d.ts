import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServiceDeleteConfigurationRecorder = "StarlingDoveService.DeleteConfigurationRecorder"
}
export declare class DeleteConfigurationRecorderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConfigurationRecorderXAmzTargetEnum;
}
export declare class DeleteConfigurationRecorderRequest extends SpeakeasyBase {
    headers: DeleteConfigurationRecorderHeaders;
    request: shared.DeleteConfigurationRecorderRequest;
}
export declare class DeleteConfigurationRecorderResponse extends SpeakeasyBase {
    contentType: string;
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
}
