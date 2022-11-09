import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSchemaHeaders extends SpeakeasyBase {
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
}


export class CreateSchemaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}


export class CreateSchemaRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSchemaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSchemaRequestBody;
}


export class CreateSchemaResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSchemaResponse?: shared.CreateSchemaResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  retryableConflictException?: any;

  @Metadata()
  schemaAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
