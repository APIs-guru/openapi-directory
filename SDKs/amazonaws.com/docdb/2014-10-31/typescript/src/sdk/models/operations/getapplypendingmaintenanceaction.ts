import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApplyPendingMaintenanceActionActionEnum {
    ApplyPendingMaintenanceAction = "ApplyPendingMaintenanceAction"
}

export enum GetApplyPendingMaintenanceActionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetApplyPendingMaintenanceActionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetApplyPendingMaintenanceActionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplyAction" })
  applyAction: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OptInType" })
  optInType: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResourceIdentifier" })
  resourceIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetApplyPendingMaintenanceActionVersionEnum;
}


export class GetApplyPendingMaintenanceActionHeaders extends SpeakeasyBase {
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


export class GetApplyPendingMaintenanceActionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApplyPendingMaintenanceActionQueryParams;

  @Metadata()
  headers: GetApplyPendingMaintenanceActionHeaders;
}


export class GetApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
