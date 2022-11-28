import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListCoreDevicesStatusEnum {
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY"
}
export declare class ListCoreDevicesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    status?: ListCoreDevicesStatusEnum;
    thingGroupArn?: string;
}
export declare class ListCoreDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCoreDevicesRequest extends SpeakeasyBase {
    queryParams: ListCoreDevicesQueryParams;
    headers: ListCoreDevicesHeaders;
}
export declare class ListCoreDevicesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listCoreDevicesResponse?: shared.ListCoreDevicesResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
