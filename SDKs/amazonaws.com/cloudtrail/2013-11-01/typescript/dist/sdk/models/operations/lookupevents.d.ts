import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LookupEventsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum LookupEventsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEvents = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents"
}
export declare class LookupEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: LookupEventsXAmzTargetEnum;
}
export declare class LookupEventsRequest extends SpeakeasyBase {
    queryParams: LookupEventsQueryParams;
    headers: LookupEventsHeaders;
    request: shared.LookupEventsRequest;
}
export declare class LookupEventsResponse extends SpeakeasyBase {
    contentType: string;
    invalidEventCategoryException?: any;
    invalidLookupAttributesException?: any;
    invalidMaxResultsException?: any;
    invalidNextTokenException?: any;
    invalidTimeRangeException?: any;
    lookupEventsResponse?: shared.LookupEventsResponse;
    operationNotPermittedException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
