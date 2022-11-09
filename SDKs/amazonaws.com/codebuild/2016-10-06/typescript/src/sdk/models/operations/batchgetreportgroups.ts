import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetReportGroupsXAmzTargetEnum {
    CodeBuild20161006BatchGetReportGroups = "CodeBuild_20161006.BatchGetReportGroups"
}


export class BatchGetReportGroupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetReportGroupsXAmzTargetEnum;
}


export class BatchGetReportGroupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetReportGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetReportGroupsInput;
}


export class BatchGetReportGroupsResponse extends SpeakeasyBase {
  @Metadata()
  batchGetReportGroupsOutput?: shared.BatchGetReportGroupsOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
