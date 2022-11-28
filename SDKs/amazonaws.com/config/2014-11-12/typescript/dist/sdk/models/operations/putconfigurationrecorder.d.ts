import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServicePutConfigurationRecorder = "StarlingDoveService.PutConfigurationRecorder"
}
export declare class PutConfigurationRecorderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutConfigurationRecorderXAmzTargetEnum;
}
export declare class PutConfigurationRecorderRequest extends SpeakeasyBase {
    headers: PutConfigurationRecorderHeaders;
    request: shared.PutConfigurationRecorderRequest;
}
export declare class PutConfigurationRecorderResponse extends SpeakeasyBase {
    contentType: string;
    invalidConfigurationRecorderNameException?: any;
    invalidRecordingGroupException?: any;
    invalidRoleException?: any;
    maxNumberOfConfigurationRecordersExceededException?: any;
    statusCode: number;
}
