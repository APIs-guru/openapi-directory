import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteSchemaXAmzTargetEnum {
    AwsGlueDeleteSchema = "AWSGlue.DeleteSchema"
}


export class DeleteSchemaHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteSchemaXAmzTargetEnum;
}


export class DeleteSchemaRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteSchemaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteSchemaInput;
}


export class DeleteSchemaResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteSchemaResponse?: shared.DeleteSchemaResponse;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
