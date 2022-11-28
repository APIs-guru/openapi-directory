import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeliverConfigSnapshotXAmzTargetEnum {
    StarlingDoveServiceDeliverConfigSnapshot = "StarlingDoveService.DeliverConfigSnapshot"
}
export declare class DeliverConfigSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeliverConfigSnapshotXAmzTargetEnum;
}
export declare class DeliverConfigSnapshotRequest extends SpeakeasyBase {
    headers: DeliverConfigSnapshotHeaders;
    request: shared.DeliverConfigSnapshotRequest;
}
export declare class DeliverConfigSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    deliverConfigSnapshotResponse?: shared.DeliverConfigSnapshotResponse;
    noAvailableConfigurationRecorderException?: any;
    noRunningConfigurationRecorderException?: any;
    noSuchDeliveryChannelException?: any;
    statusCode: number;
}
