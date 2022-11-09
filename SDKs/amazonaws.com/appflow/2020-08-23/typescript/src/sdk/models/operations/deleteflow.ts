import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFlowHeaders extends SpeakeasyBase {
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


export class DeleteFlowRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=flowName" })
  flowName: string;

  @Metadata({ data: "json, name=forceDelete" })
  forceDelete?: boolean;
}


export class DeleteFlowRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteFlowHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteFlowRequestBody;
}


export class DeleteFlowResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteFlowResponse?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
