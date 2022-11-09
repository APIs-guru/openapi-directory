import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetReportInstanceStatusActionEnum {
    ReportInstanceStatus = "ReportInstanceStatus"
}

export enum GetReportInstanceStatusStatusEnum {
    Ok = "ok"
,    Impaired = "impaired"
}

export enum GetReportInstanceStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReportInstanceStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReportInstanceStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReasonCode" })
  reasonCode: shared.ReportInstanceReasonCodesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetReportInstanceStatusStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReportInstanceStatusVersionEnum;
}


export class GetReportInstanceStatusHeaders extends SpeakeasyBase {
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


export class GetReportInstanceStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReportInstanceStatusQueryParams;

  @Metadata()
  headers: GetReportInstanceStatusHeaders;
}


export class GetReportInstanceStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
