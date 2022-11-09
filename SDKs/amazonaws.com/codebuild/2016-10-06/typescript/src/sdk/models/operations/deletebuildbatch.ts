import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteBuildBatchXAmzTargetEnum {
    CodeBuild20161006DeleteBuildBatch = "CodeBuild_20161006.DeleteBuildBatch"
}


export class DeleteBuildBatchHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteBuildBatchXAmzTargetEnum;
}


export class DeleteBuildBatchRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteBuildBatchHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteBuildBatchInput;
}


export class DeleteBuildBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteBuildBatchOutput?: shared.DeleteBuildBatchOutput;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
