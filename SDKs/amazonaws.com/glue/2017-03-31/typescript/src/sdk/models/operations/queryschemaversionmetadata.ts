import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum QuerySchemaVersionMetadataXAmzTargetEnum {
    AwsGlueQuerySchemaVersionMetadata = "AWSGlue.QuerySchemaVersionMetadata"
}


export class QuerySchemaVersionMetadataHeaders extends SpeakeasyBase {
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
  xAmzTarget: QuerySchemaVersionMetadataXAmzTargetEnum;
}


export class QuerySchemaVersionMetadataRequest extends SpeakeasyBase {
  @Metadata()
  headers: QuerySchemaVersionMetadataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.QuerySchemaVersionMetadataInput;
}


export class QuerySchemaVersionMetadataResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  querySchemaVersionMetadataResponse?: shared.QuerySchemaVersionMetadataResponse;

  @Metadata()
  statusCode: number;
}
