import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListVirtualClustersContainerProviderTypeEnum {
    Eks = "EKS"
}
export declare class ListVirtualClustersQueryParams extends SpeakeasyBase {
    containerProviderId?: string;
    containerProviderType?: ListVirtualClustersContainerProviderTypeEnum;
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    states?: shared.VirtualClusterStateEnum[];
}
export declare class ListVirtualClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListVirtualClustersRequest extends SpeakeasyBase {
    queryParams: ListVirtualClustersQueryParams;
    headers: ListVirtualClustersHeaders;
}
export declare class ListVirtualClustersResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listVirtualClustersResponse?: shared.ListVirtualClustersResponse;
    statusCode: number;
    validationException?: any;
}
