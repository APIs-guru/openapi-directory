import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteReportGroupXAmzTargetEnum {
    CodeBuild20161006DeleteReportGroup = "CodeBuild_20161006.DeleteReportGroup"
}


export class DeleteReportGroupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteReportGroupXAmzTargetEnum;
}


export class DeleteReportGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteReportGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteReportGroupInput;
}


export class DeleteReportGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteReportGroupOutput?: Map<string, any>;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
