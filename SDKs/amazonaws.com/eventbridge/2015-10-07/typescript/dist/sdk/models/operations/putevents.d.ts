import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutEventsXAmzTargetEnum {
    AwsEventsPutEvents = "AWSEvents.PutEvents"
}
export declare class PutEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutEventsXAmzTargetEnum;
}
export declare class PutEventsRequest extends SpeakeasyBase {
    headers: PutEventsHeaders;
    request: shared.PutEventsRequest;
}
export declare class PutEventsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    putEventsResponse?: shared.PutEventsResponse;
    statusCode: number;
}
