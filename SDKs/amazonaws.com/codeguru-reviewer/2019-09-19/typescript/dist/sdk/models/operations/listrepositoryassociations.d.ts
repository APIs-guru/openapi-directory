import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRepositoryAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    name?: string[];
    nextToken?: string;
    owner?: string[];
    providerType?: shared.ProviderTypeEnum[];
    state?: shared.RepositoryAssociationStateEnum[];
}
export declare class ListRepositoryAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRepositoryAssociationsRequest extends SpeakeasyBase {
    queryParams: ListRepositoryAssociationsQueryParams;
    headers: ListRepositoryAssociationsHeaders;
}
export declare class ListRepositoryAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listRepositoryAssociationsResponse?: shared.ListRepositoryAssociationsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
