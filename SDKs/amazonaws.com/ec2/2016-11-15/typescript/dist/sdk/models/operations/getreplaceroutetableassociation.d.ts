import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetReplaceRouteTableAssociationActionEnum {
    ReplaceRouteTableAssociation = "ReplaceRouteTableAssociation"
}
export declare enum GetReplaceRouteTableAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetReplaceRouteTableAssociationQueryParams extends SpeakeasyBase {
    action: GetReplaceRouteTableAssociationActionEnum;
    associationId: string;
    dryRun?: boolean;
    routeTableId: string;
    version: GetReplaceRouteTableAssociationVersionEnum;
}
export declare class GetReplaceRouteTableAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReplaceRouteTableAssociationRequest extends SpeakeasyBase {
    queryParams: GetReplaceRouteTableAssociationQueryParams;
    headers: GetReplaceRouteTableAssociationHeaders;
}
export declare class GetReplaceRouteTableAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
