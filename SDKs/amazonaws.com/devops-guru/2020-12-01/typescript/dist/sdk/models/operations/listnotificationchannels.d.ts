import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListNotificationChannelsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class ListNotificationChannelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListNotificationChannelsRequestBody extends SpeakeasyBase {
    nextToken?: string;
}
export declare class ListNotificationChannelsRequest extends SpeakeasyBase {
    queryParams: ListNotificationChannelsQueryParams;
    headers: ListNotificationChannelsHeaders;
    request: ListNotificationChannelsRequestBody;
}
export declare class ListNotificationChannelsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listNotificationChannelsResponse?: shared.ListNotificationChannelsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
