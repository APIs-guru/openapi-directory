import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListContactsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListContactsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListContactsRequestBody extends SpeakeasyBase {
    endTime: Date;
    groundStation?: string;
    maxResults?: number;
    missionProfileArn?: string;
    nextToken?: string;
    satelliteArn?: string;
    startTime: Date;
    statusList: shared.ContactStatusEnum[];
}
export declare class ListContactsRequest extends SpeakeasyBase {
    queryParams: ListContactsQueryParams;
    headers: ListContactsHeaders;
    request: ListContactsRequestBody;
}
export declare class ListContactsResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    listContactsResponse?: shared.ListContactsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
