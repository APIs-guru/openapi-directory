import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteSchemaVersionsXAmzTargetEnum {
    AwsGlueDeleteSchemaVersions = "AWSGlue.DeleteSchemaVersions"
}


export class DeleteSchemaVersionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteSchemaVersionsXAmzTargetEnum;
}


export class DeleteSchemaVersionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteSchemaVersionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteSchemaVersionsInput;
}


export class DeleteSchemaVersionsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteSchemaVersionsResponse?: shared.DeleteSchemaVersionsResponse;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
