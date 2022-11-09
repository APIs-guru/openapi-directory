import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribePendingMaintenanceActionsActionEnum {
    DescribePendingMaintenanceActions = "DescribePendingMaintenanceActions"
}

export enum PostDescribePendingMaintenanceActionsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostDescribePendingMaintenanceActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribePendingMaintenanceActionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribePendingMaintenanceActionsVersionEnum;
}


export class PostDescribePendingMaintenanceActionsHeaders extends SpeakeasyBase {
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
}


export class PostDescribePendingMaintenanceActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribePendingMaintenanceActionsQueryParams;

  @Metadata()
  headers: PostDescribePendingMaintenanceActionsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribePendingMaintenanceActionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
