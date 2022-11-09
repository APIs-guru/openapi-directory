import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostReportInstanceStatusActionEnum {
    ReportInstanceStatus = "ReportInstanceStatus"
}

export enum PostReportInstanceStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostReportInstanceStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostReportInstanceStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostReportInstanceStatusVersionEnum;
}


export class PostReportInstanceStatusHeaders extends SpeakeasyBase {
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


export class PostReportInstanceStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostReportInstanceStatusQueryParams;

  @Metadata()
  headers: PostReportInstanceStatusHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostReportInstanceStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
