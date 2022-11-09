import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBulkPublishDetailsPathParams extends SpeakeasyBase {
    identityPoolId: string;
}
export declare class GetBulkPublishDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBulkPublishDetailsRequest extends SpeakeasyBase {
    pathParams: GetBulkPublishDetailsPathParams;
    headers: GetBulkPublishDetailsHeaders;
}
export declare class GetBulkPublishDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getBulkPublishDetailsResponse?: shared.GetBulkPublishDetailsResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
