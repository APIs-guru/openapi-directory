import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLogSubscriptionsXAmzTargetEnum {
    DirectoryService20150416ListLogSubscriptions = "DirectoryService_20150416.ListLogSubscriptions"
}
export declare class ListLogSubscriptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLogSubscriptionsXAmzTargetEnum;
}
export declare class ListLogSubscriptionsRequest extends SpeakeasyBase {
    headers: ListLogSubscriptionsHeaders;
    request: shared.ListLogSubscriptionsRequest;
}
export declare class ListLogSubscriptionsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    entityDoesNotExistException?: any;
    invalidNextTokenException?: any;
    listLogSubscriptionsResult?: shared.ListLogSubscriptionsResult;
    serviceException?: any;
    statusCode: number;
}
