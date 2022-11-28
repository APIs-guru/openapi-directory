import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFindingPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFindingQueryParams extends SpeakeasyBase {
    analyzerArn: string;
}
export declare class GetFindingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFindingRequest extends SpeakeasyBase {
    pathParams: GetFindingPathParams;
    queryParams: GetFindingQueryParams;
    headers: GetFindingHeaders;
}
export declare class GetFindingResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getFindingResponse?: shared.GetFindingResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
