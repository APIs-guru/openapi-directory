import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLocationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListLocationsXAmzTargetEnum {
    FmrsServiceListLocations = "FmrsService.ListLocations"
}
export declare class ListLocationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLocationsXAmzTargetEnum;
}
export declare class ListLocationsRequest extends SpeakeasyBase {
    queryParams: ListLocationsQueryParams;
    headers: ListLocationsHeaders;
    request: shared.ListLocationsRequest;
}
export declare class ListLocationsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
