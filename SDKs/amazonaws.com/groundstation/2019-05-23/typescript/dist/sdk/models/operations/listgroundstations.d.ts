import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGroundStationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    satelliteId?: string;
}
export declare class ListGroundStationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGroundStationsRequest extends SpeakeasyBase {
    queryParams: ListGroundStationsQueryParams;
    headers: ListGroundStationsHeaders;
}
export declare class ListGroundStationsResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    listGroundStationsResponse?: shared.ListGroundStationsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
