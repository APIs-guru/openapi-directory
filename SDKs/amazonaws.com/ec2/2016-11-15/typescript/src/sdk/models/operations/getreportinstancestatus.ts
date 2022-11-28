import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetReportInstanceStatusActionEnum {
    ReportInstanceStatus = "ReportInstanceStatus"
}

export enum GetReportInstanceStatusStatusEnum {
    Ok = "ok",
    Impaired = "impaired"
}

export enum GetReportInstanceStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReportInstanceStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReportInstanceStatusActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReasonCode" })
  reasonCode: shared.ReportInstanceReasonCodesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetReportInstanceStatusStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReportInstanceStatusVersionEnum;
}


export class GetReportInstanceStatusHeaders extends SpeakeasyBase {
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
}


export class GetReportInstanceStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportInstanceStatusQueryParams;

  @SpeakeasyMetadata()
  headers: GetReportInstanceStatusHeaders;
}


export class GetReportInstanceStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
