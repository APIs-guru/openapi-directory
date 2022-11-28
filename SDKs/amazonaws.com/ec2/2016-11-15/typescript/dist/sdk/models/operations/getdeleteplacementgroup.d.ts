import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeletePlacementGroupActionEnum {
    DeletePlacementGroup = "DeletePlacementGroup"
}
export declare enum GetDeletePlacementGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeletePlacementGroupQueryParams extends SpeakeasyBase {
    action: GetDeletePlacementGroupActionEnum;
    dryRun?: boolean;
    groupName: string;
    version: GetDeletePlacementGroupVersionEnum;
}
export declare class GetDeletePlacementGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeletePlacementGroupRequest extends SpeakeasyBase {
    queryParams: GetDeletePlacementGroupQueryParams;
    headers: GetDeletePlacementGroupHeaders;
}
export declare class GetDeletePlacementGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
