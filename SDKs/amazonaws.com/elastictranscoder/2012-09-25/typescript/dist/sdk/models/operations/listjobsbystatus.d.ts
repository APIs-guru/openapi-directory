import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobsByStatusPathParams extends SpeakeasyBase {
    status: string;
}
export declare class ListJobsByStatusQueryParams extends SpeakeasyBase {
    ascending?: string;
    pageToken?: string;
}
export declare class ListJobsByStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListJobsByStatusRequest extends SpeakeasyBase {
    pathParams: ListJobsByStatusPathParams;
    queryParams: ListJobsByStatusQueryParams;
    headers: ListJobsByStatusHeaders;
}
export declare class ListJobsByStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    listJobsByStatusResponse?: shared.ListJobsByStatusResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
