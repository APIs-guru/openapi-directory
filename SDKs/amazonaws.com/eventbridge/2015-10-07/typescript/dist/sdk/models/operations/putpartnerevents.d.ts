import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutPartnerEventsXAmzTargetEnum {
    AwsEventsPutPartnerEvents = "AWSEvents.PutPartnerEvents"
}
export declare class PutPartnerEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPartnerEventsXAmzTargetEnum;
}
export declare class PutPartnerEventsRequest extends SpeakeasyBase {
    headers: PutPartnerEventsHeaders;
    request: shared.PutPartnerEventsRequest;
}
export declare class PutPartnerEventsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    operationDisabledException?: any;
    putPartnerEventsResponse?: shared.PutPartnerEventsResponse;
    statusCode: number;
}
