import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCoreDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CoreDefinitionId" })
  coreDefinitionId: string;
}


export class UpdateCoreDefinitionHeaders extends SpeakeasyBase {
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


export class UpdateCoreDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}


export class UpdateCoreDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCoreDefinitionPathParams;

  @Metadata()
  headers: UpdateCoreDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateCoreDefinitionRequestBody;
}


export class UpdateCoreDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCoreDefinitionResponse?: Map<string, any>;
}
