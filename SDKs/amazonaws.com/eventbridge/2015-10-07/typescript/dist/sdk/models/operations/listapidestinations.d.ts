import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListApiDestinationsXAmzTargetEnum {
    AwsEventsListApiDestinations = "AWSEvents.ListApiDestinations"
}
export declare class ListApiDestinationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApiDestinationsXAmzTargetEnum;
}
export declare class ListApiDestinationsRequest extends SpeakeasyBase {
    headers: ListApiDestinationsHeaders;
    request: shared.ListApiDestinationsRequest;
}
export declare class ListApiDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listApiDestinationsResponse?: shared.ListApiDestinationsResponse;
    statusCode: number;
}
