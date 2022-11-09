import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutSchemaVersionMetadataXAmzTargetEnum {
    AwsGluePutSchemaVersionMetadata = "AWSGlue.PutSchemaVersionMetadata"
}


export class PutSchemaVersionMetadataHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutSchemaVersionMetadataXAmzTargetEnum;
}


export class PutSchemaVersionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutSchemaVersionMetadataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutSchemaVersionMetadataInput;
}


export class PutSchemaVersionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  putSchemaVersionMetadataResponse?: shared.PutSchemaVersionMetadataResponse;

  @Metadata()
  resourceNumberLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
