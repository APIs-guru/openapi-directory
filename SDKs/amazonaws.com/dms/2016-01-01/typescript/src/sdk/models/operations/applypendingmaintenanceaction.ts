import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ApplyPendingMaintenanceActionXAmzTargetEnum {
    AmazonDmSv20160101ApplyPendingMaintenanceAction = "AmazonDMSv20160101.ApplyPendingMaintenanceAction"
}


export class ApplyPendingMaintenanceActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ApplyPendingMaintenanceActionXAmzTargetEnum;
}


export class ApplyPendingMaintenanceActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ApplyPendingMaintenanceActionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ApplyPendingMaintenanceActionMessage;
}


export class ApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applyPendingMaintenanceActionResponse?: shared.ApplyPendingMaintenanceActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
