import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPresetsQueryParams extends SpeakeasyBase {
    ascending?: string;
    pageToken?: string;
}
export declare class ListPresetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPresetsRequest extends SpeakeasyBase {
    queryParams: ListPresetsQueryParams;
    headers: ListPresetsHeaders;
}
export declare class ListPresetsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    incompatibleVersionException?: any;
    internalServiceException?: any;
    listPresetsResponse?: shared.ListPresetsResponse;
    statusCode: number;
    validationException?: any;
}
