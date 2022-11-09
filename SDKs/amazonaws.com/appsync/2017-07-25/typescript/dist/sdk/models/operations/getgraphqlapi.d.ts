import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetGraphqlApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetGraphqlApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGraphqlApiRequest extends SpeakeasyBase {
    pathParams: GetGraphqlApiPathParams;
    headers: GetGraphqlApiHeaders;
}
export declare class GetGraphqlApiResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    getGraphqlApiResponse?: shared.GetGraphqlApiResponse;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
