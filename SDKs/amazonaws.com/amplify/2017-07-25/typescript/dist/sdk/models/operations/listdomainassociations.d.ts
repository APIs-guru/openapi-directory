import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDomainAssociationsPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class ListDomainAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDomainAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDomainAssociationsRequest extends SpeakeasyBase {
    pathParams: ListDomainAssociationsPathParams;
    queryParams: ListDomainAssociationsQueryParams;
    headers: ListDomainAssociationsHeaders;
}
export declare class ListDomainAssociationsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listDomainAssociationsResult?: shared.ListDomainAssociationsResult;
    statusCode: number;
    unauthorizedException?: any;
}
