import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeviceDefinitionVersionsPathParams extends SpeakeasyBase {
    deviceDefinitionId: string;
}
export declare class ListDeviceDefinitionVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListDeviceDefinitionVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDeviceDefinitionVersionsRequest extends SpeakeasyBase {
    pathParams: ListDeviceDefinitionVersionsPathParams;
    queryParams: ListDeviceDefinitionVersionsQueryParams;
    headers: ListDeviceDefinitionVersionsHeaders;
}
export declare class ListDeviceDefinitionVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listDeviceDefinitionVersionsResponse?: shared.ListDeviceDefinitionVersionsResponse;
    statusCode: number;
}
