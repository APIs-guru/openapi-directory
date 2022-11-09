import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateWorkspaceAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspaceId" })
  workspaceId: string;
}


export class UpdateWorkspaceAliasHeaders extends SpeakeasyBase {
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


export class UpdateWorkspaceAliasRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;
}


export class UpdateWorkspaceAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWorkspaceAliasPathParams;

  @Metadata()
  headers: UpdateWorkspaceAliasHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateWorkspaceAliasRequestBody;
}


export class UpdateWorkspaceAliasResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
