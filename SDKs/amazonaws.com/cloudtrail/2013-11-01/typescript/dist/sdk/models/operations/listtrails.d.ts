import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTrailsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListTrailsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrails = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails"
}
export declare class ListTrailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTrailsXAmzTargetEnum;
}
export declare class ListTrailsRequest extends SpeakeasyBase {
    queryParams: ListTrailsQueryParams;
    headers: ListTrailsHeaders;
    request: shared.ListTrailsRequest;
}
export declare class ListTrailsResponse extends SpeakeasyBase {
    contentType: string;
    listTrailsResponse?: shared.ListTrailsResponse;
    operationNotPermittedException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
