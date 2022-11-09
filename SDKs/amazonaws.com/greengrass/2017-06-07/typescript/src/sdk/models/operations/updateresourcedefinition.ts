import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateResourceDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceDefinitionId" })
  resourceDefinitionId: string;
}


export class UpdateResourceDefinitionHeaders extends SpeakeasyBase {
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


export class UpdateResourceDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}


export class UpdateResourceDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateResourceDefinitionPathParams;

  @Metadata()
  headers: UpdateResourceDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateResourceDefinitionRequestBody;
}


export class UpdateResourceDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateResourceDefinitionResponse?: Map<string, any>;
}
