import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListPartnerEventSourcesXAmzTargetEnum {
    AwsEventsListPartnerEventSources = "AWSEvents.ListPartnerEventSources"
}
export declare class ListPartnerEventSourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPartnerEventSourcesXAmzTargetEnum;
}
export declare class ListPartnerEventSourcesRequest extends SpeakeasyBase {
    headers: ListPartnerEventSourcesHeaders;
    request: shared.ListPartnerEventSourcesRequest;
}
export declare class ListPartnerEventSourcesResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listPartnerEventSourcesResponse?: shared.ListPartnerEventSourcesResponse;
    operationDisabledException?: any;
    statusCode: number;
}
