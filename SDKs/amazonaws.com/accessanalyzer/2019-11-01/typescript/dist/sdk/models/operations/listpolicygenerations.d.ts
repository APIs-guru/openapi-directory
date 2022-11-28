import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPolicyGenerationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    principalArn?: string;
}
export declare class ListPolicyGenerationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPolicyGenerationsRequest extends SpeakeasyBase {
    queryParams: ListPolicyGenerationsQueryParams;
    headers: ListPolicyGenerationsHeaders;
}
export declare class ListPolicyGenerationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listPolicyGenerationsResponse?: shared.ListPolicyGenerationsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
