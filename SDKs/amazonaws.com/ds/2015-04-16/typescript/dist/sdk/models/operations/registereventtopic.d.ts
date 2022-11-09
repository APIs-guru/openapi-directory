import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RegisterEventTopicXAmzTargetEnum {
    DirectoryService20150416RegisterEventTopic = "DirectoryService_20150416.RegisterEventTopic"
}
export declare class RegisterEventTopicHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterEventTopicXAmzTargetEnum;
}
export declare class RegisterEventTopicRequest extends SpeakeasyBase {
    headers: RegisterEventTopicHeaders;
    request: shared.RegisterEventTopicRequest;
}
export declare class RegisterEventTopicResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    registerEventTopicResult?: Map<string, any>;
    serviceException?: any;
    statusCode: number;
}
