import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListEffectiveDeploymentsPathParams extends SpeakeasyBase {
    coreDeviceThingName: string;
}
export declare class ListEffectiveDeploymentsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListEffectiveDeploymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEffectiveDeploymentsRequest extends SpeakeasyBase {
    pathParams: ListEffectiveDeploymentsPathParams;
    queryParams: ListEffectiveDeploymentsQueryParams;
    headers: ListEffectiveDeploymentsHeaders;
}
export declare class ListEffectiveDeploymentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listEffectiveDeploymentsResponse?: shared.ListEffectiveDeploymentsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
