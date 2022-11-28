import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDescribeUpdateActionsActionEnum {
    DescribeUpdateActions = "DescribeUpdateActions"
}
/**
 * Filters update actions from the service updates that are in available status during the time range.
**/
export declare class GetDescribeUpdateActionsServiceUpdateTimeRange extends SpeakeasyBase {
    endTime?: Date;
    startTime?: Date;
}
export declare enum GetDescribeUpdateActionsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeUpdateActionsQueryParams extends SpeakeasyBase {
    action: GetDescribeUpdateActionsActionEnum;
    cacheClusterIds?: string[];
    engine?: string;
    marker?: string;
    maxRecords?: number;
    replicationGroupIds?: string[];
    serviceUpdateName?: string;
    serviceUpdateStatus?: shared.ServiceUpdateStatusEnum[];
    serviceUpdateTimeRange?: GetDescribeUpdateActionsServiceUpdateTimeRange;
    showNodeLevelUpdateStatus?: boolean;
    updateActionStatus?: shared.UpdateActionStatusEnum[];
    version: GetDescribeUpdateActionsVersionEnum;
}
export declare class GetDescribeUpdateActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeUpdateActionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeUpdateActionsQueryParams;
    headers: GetDescribeUpdateActionsHeaders;
}
export declare class GetDescribeUpdateActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
