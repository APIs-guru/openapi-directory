import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListArchivesXAmzTargetEnum {
    AwsEventsListArchives = "AWSEvents.ListArchives"
}
export declare class ListArchivesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListArchivesXAmzTargetEnum;
}
export declare class ListArchivesRequest extends SpeakeasyBase {
    headers: ListArchivesHeaders;
    request: shared.ListArchivesRequest;
}
export declare class ListArchivesResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listArchivesResponse?: shared.ListArchivesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
