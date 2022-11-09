import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetReportsXAmzTargetEnum {
    CodeBuild20161006BatchGetReports = "CodeBuild_20161006.BatchGetReports"
}


export class BatchGetReportsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetReportsXAmzTargetEnum;
}


export class BatchGetReportsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetReportsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetReportsInput;
}


export class BatchGetReportsResponse extends SpeakeasyBase {
  @Metadata()
  batchGetReportsOutput?: shared.BatchGetReportsOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
