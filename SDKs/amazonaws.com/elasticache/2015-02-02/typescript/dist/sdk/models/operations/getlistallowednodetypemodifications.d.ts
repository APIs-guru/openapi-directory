import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListAllowedNodeTypeModificationsActionEnum {
    ListAllowedNodeTypeModifications = "ListAllowedNodeTypeModifications"
}
export declare enum GetListAllowedNodeTypeModificationsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetListAllowedNodeTypeModificationsQueryParams extends SpeakeasyBase {
    action: GetListAllowedNodeTypeModificationsActionEnum;
    cacheClusterId?: string;
    replicationGroupId?: string;
    version: GetListAllowedNodeTypeModificationsVersionEnum;
}
export declare class GetListAllowedNodeTypeModificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListAllowedNodeTypeModificationsRequest extends SpeakeasyBase {
    queryParams: GetListAllowedNodeTypeModificationsQueryParams;
    headers: GetListAllowedNodeTypeModificationsHeaders;
}
export declare class GetListAllowedNodeTypeModificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
