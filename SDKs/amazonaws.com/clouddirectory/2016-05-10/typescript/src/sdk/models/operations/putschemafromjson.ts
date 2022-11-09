import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSchemaFromJsonHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-data-partition" })
  xAmzDataPartition: string;
}


export class PutSchemaFromJsonRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Document" })
  document: string;
}


export class PutSchemaFromJsonRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutSchemaFromJsonHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutSchemaFromJsonRequestBody;
}


export class PutSchemaFromJsonResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: shared.AccessDeniedException;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: shared.InternalServiceException;

  @Metadata()
  invalidArnException?: shared.InvalidArnException;

  @Metadata()
  invalidRuleException?: shared.InvalidRuleException;

  @Metadata()
  invalidSchemaDocException?: shared.InvalidSchemaDocException;

  @Metadata()
  limitExceededException?: shared.LimitExceededException;

  @Metadata()
  putSchemaFromJsonResponse?: shared.PutSchemaFromJsonResponse;

  @Metadata()
  retryableConflictException?: shared.RetryableConflictException;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: shared.ValidationException;
}
