import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ApplyPendingMaintenanceActionXAmzTargetEnum {
    AmazonDmSv20160101ApplyPendingMaintenanceAction = "AmazonDMSv20160101.ApplyPendingMaintenanceAction"
}


export class ApplyPendingMaintenanceActionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ApplyPendingMaintenanceActionXAmzTargetEnum;
}


export class ApplyPendingMaintenanceActionRequest extends SpeakeasyBase {
  @Metadata()
  headers: ApplyPendingMaintenanceActionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ApplyPendingMaintenanceActionMessage;
}


export class ApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
  @Metadata()
  applyPendingMaintenanceActionResponse?: shared.ApplyPendingMaintenanceActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
