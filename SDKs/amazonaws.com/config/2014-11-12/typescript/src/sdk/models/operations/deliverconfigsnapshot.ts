import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeliverConfigSnapshotXAmzTargetEnum {
    StarlingDoveServiceDeliverConfigSnapshot = "StarlingDoveService.DeliverConfigSnapshot"
}


export class DeliverConfigSnapshotHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeliverConfigSnapshotXAmzTargetEnum;
}


export class DeliverConfigSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeliverConfigSnapshotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeliverConfigSnapshotRequest;
}


export class DeliverConfigSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deliverConfigSnapshotResponse?: shared.DeliverConfigSnapshotResponse;

  @Metadata()
  noAvailableConfigurationRecorderException?: any;

  @Metadata()
  noRunningConfigurationRecorderException?: any;

  @Metadata()
  noSuchDeliveryChannelException?: any;

  @Metadata()
  statusCode: number;
}
