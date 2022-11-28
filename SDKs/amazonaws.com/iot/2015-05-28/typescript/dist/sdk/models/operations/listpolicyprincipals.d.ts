import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPolicyPrincipalsQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    marker?: string;
    pageSize?: number;
}
export declare class ListPolicyPrincipalsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznIotPolicy: string;
}
export declare class ListPolicyPrincipalsRequest extends SpeakeasyBase {
    queryParams: ListPolicyPrincipalsQueryParams;
    headers: ListPolicyPrincipalsHeaders;
}
export declare class ListPolicyPrincipalsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listPolicyPrincipalsResponse?: shared.ListPolicyPrincipalsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
