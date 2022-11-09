import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RemoveSchemaVersionMetadataXAmzTargetEnum {
    AwsGlueRemoveSchemaVersionMetadata = "AWSGlue.RemoveSchemaVersionMetadata"
}


export class RemoveSchemaVersionMetadataHeaders extends SpeakeasyBase {
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
  xAmzTarget: RemoveSchemaVersionMetadataXAmzTargetEnum;
}


export class RemoveSchemaVersionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveSchemaVersionMetadataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RemoveSchemaVersionMetadataInput;
}


export class RemoveSchemaVersionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  removeSchemaVersionMetadataResponse?: shared.RemoveSchemaVersionMetadataResponse;

  @Metadata()
  statusCode: number;
}
