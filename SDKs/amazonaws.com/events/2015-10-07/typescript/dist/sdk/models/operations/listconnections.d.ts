import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListConnectionsXAmzTargetEnum {
    AwsEventsListConnections = "AWSEvents.ListConnections"
}
export declare class ListConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListConnectionsXAmzTargetEnum;
}
export declare class ListConnectionsRequest extends SpeakeasyBase {
    headers: ListConnectionsHeaders;
    request: shared.ListConnectionsRequest;
}
export declare class ListConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listConnectionsResponse?: shared.ListConnectionsResponse;
    statusCode: number;
}
