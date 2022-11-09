import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetReportGroupTrendXAmzTargetEnum {
    CodeBuild20161006GetReportGroupTrend = "CodeBuild_20161006.GetReportGroupTrend"
}


export class GetReportGroupTrendHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetReportGroupTrendXAmzTargetEnum;
}


export class GetReportGroupTrendRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetReportGroupTrendHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetReportGroupTrendInput;
}


export class GetReportGroupTrendResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReportGroupTrendOutput?: shared.GetReportGroupTrendOutput;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
