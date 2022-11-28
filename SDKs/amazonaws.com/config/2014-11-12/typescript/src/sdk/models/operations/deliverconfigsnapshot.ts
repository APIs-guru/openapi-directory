import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeliverConfigSnapshotXAmzTargetEnum {
    StarlingDoveServiceDeliverConfigSnapshot = "StarlingDoveService.DeliverConfigSnapshot"
}


export class DeliverConfigSnapshotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeliverConfigSnapshotXAmzTargetEnum;
}


export class DeliverConfigSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeliverConfigSnapshotHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeliverConfigSnapshotRequest;
}


export class DeliverConfigSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deliverConfigSnapshotResponse?: shared.DeliverConfigSnapshotResponse;

  @SpeakeasyMetadata()
  noAvailableConfigurationRecorderException?: any;

  @SpeakeasyMetadata()
  noRunningConfigurationRecorderException?: any;

  @SpeakeasyMetadata()
  noSuchDeliveryChannelException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
