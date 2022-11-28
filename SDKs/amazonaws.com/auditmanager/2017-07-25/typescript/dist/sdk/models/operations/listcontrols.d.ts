import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListControlsControlTypeEnum {
    Standard = "Standard",
    Custom = "Custom"
}
export declare class ListControlsQueryParams extends SpeakeasyBase {
    controlType: ListControlsControlTypeEnum;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListControlsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListControlsRequest extends SpeakeasyBase {
    queryParams: ListControlsQueryParams;
    headers: ListControlsHeaders;
}
export declare class ListControlsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listControlsResponse?: shared.ListControlsResponse;
    statusCode: number;
    validationException?: any;
}
