import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterEventTopicXAmzTargetEnum {
    DirectoryService20150416DeregisterEventTopic = "DirectoryService_20150416.DeregisterEventTopic"
}
export declare class DeregisterEventTopicHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterEventTopicXAmzTargetEnum;
}
export declare class DeregisterEventTopicRequest extends SpeakeasyBase {
    headers: DeregisterEventTopicHeaders;
    request: shared.DeregisterEventTopicRequest;
}
export declare class DeregisterEventTopicResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deregisterEventTopicResult?: Map<string, any>;
    entityDoesNotExistException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
}
