import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribePendingMaintenanceActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;
}

export enum DescribePendingMaintenanceActionsXAmzTargetEnum {
    AmazonDmSv20160101DescribePendingMaintenanceActions = "AmazonDMSv20160101.DescribePendingMaintenanceActions"
}


export class DescribePendingMaintenanceActionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePendingMaintenanceActionsXAmzTargetEnum;
}


export class DescribePendingMaintenanceActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribePendingMaintenanceActionsQueryParams;

  @Metadata()
  headers: DescribePendingMaintenanceActionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePendingMaintenanceActionsMessage;
}


export class DescribePendingMaintenanceActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describePendingMaintenanceActionsResponse?: shared.DescribePendingMaintenanceActionsResponse;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}
