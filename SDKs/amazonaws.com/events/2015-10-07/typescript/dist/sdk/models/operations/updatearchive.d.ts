import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateArchiveXAmzTargetEnum {
    AwsEventsUpdateArchive = "AWSEvents.UpdateArchive"
}
export declare class UpdateArchiveHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateArchiveXAmzTargetEnum;
}
export declare class UpdateArchiveRequest extends SpeakeasyBase {
    headers: UpdateArchiveHeaders;
    request: shared.UpdateArchiveRequest;
}
export declare class UpdateArchiveResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    invalidEventPatternException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateArchiveResponse?: shared.UpdateArchiveResponse;
}
