import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteArchiveXAmzTargetEnum {
    AwsEventsDeleteArchive = "AWSEvents.DeleteArchive"
}
export declare class DeleteArchiveHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteArchiveXAmzTargetEnum;
}
export declare class DeleteArchiveRequest extends SpeakeasyBase {
    headers: DeleteArchiveHeaders;
    request: shared.DeleteArchiveRequest;
}
export declare class DeleteArchiveResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteArchiveResponse?: Map<string, any>;
    internalException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
