import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartSchemaCreationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class StartSchemaCreationHeaders extends SpeakeasyBase {
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


export class StartSchemaCreationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition: string;
}


export class StartSchemaCreationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartSchemaCreationPathParams;

  @Metadata()
  headers: StartSchemaCreationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartSchemaCreationRequestBody;
}


export class StartSchemaCreationResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  startSchemaCreationResponse?: shared.StartSchemaCreationResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
