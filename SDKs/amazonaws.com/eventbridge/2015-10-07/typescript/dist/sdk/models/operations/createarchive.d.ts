import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateArchiveXAmzTargetEnum {
    AwsEventsCreateArchive = "AWSEvents.CreateArchive"
}
export declare class CreateArchiveHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateArchiveXAmzTargetEnum;
}
export declare class CreateArchiveRequest extends SpeakeasyBase {
    headers: CreateArchiveHeaders;
    request: shared.CreateArchiveRequest;
}
export declare class CreateArchiveResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createArchiveResponse?: shared.CreateArchiveResponse;
    internalException?: any;
    invalidEventPatternException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
