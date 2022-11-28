import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApisQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetApisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApisRequest extends SpeakeasyBase {
    queryParams: GetApisQueryParams;
    headers: GetApisHeaders;
}
export declare class GetApisResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getApisResponse?: shared.GetApisResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
