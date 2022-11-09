import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteTargetGroupActionEnum {
    DeleteTargetGroup = "DeleteTargetGroup"
}
export declare enum GetDeleteTargetGroupVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetDeleteTargetGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteTargetGroupActionEnum;
    targetGroupArn: string;
    version: GetDeleteTargetGroupVersionEnum;
}
export declare class GetDeleteTargetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTargetGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteTargetGroupQueryParams;
    headers: GetDeleteTargetGroupHeaders;
}
export declare class GetDeleteTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
