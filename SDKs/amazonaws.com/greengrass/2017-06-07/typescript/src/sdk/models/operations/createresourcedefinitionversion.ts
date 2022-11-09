import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateResourceDefinitionVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceDefinitionId" })
  resourceDefinitionId: string;
}


export class CreateResourceDefinitionVersionHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


export class CreateResourceDefinitionVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resources", elemType: shared.Resource })
  resources?: shared.Resource[];
}


export class CreateResourceDefinitionVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateResourceDefinitionVersionPathParams;

  @Metadata()
  headers: CreateResourceDefinitionVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateResourceDefinitionVersionRequestBody;
}


export class CreateResourceDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createResourceDefinitionVersionResponse?: shared.CreateResourceDefinitionVersionResponse;

  @Metadata()
  statusCode: number;
}
