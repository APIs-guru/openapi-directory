import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDeviceDefinitionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListDeviceDefinitionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDeviceDefinitionsRequest extends SpeakeasyBase {
    queryParams: ListDeviceDefinitionsQueryParams;
    headers: ListDeviceDefinitionsHeaders;
}
export declare class ListDeviceDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    listDeviceDefinitionsResponse?: shared.ListDeviceDefinitionsResponse;
    statusCode: number;
}
