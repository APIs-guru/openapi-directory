import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePipelineStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;
}


export class UpdatePipelineStatusHeaders extends SpeakeasyBase {
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


export class UpdatePipelineStatusRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status: string;
}


export class UpdatePipelineStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePipelineStatusPathParams;

  @Metadata()
  headers: UpdatePipelineStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdatePipelineStatusRequestBody;
}


export class UpdatePipelineStatusResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incompatibleVersionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePipelineStatusResponse?: shared.UpdatePipelineStatusResponse;

  @Metadata()
  validationException?: any;
}
