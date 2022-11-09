import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteReportXAmzTargetEnum {
    CodeBuild20161006DeleteReport = "CodeBuild_20161006.DeleteReport"
}


export class DeleteReportHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteReportXAmzTargetEnum;
}


export class DeleteReportRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteReportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteReportInput;
}


export class DeleteReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteReportOutput?: Map<string, any>;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
