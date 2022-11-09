import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateControlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=controlId" })
  controlId: string;
}


export class UpdateControlHeaders extends SpeakeasyBase {
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


export class UpdateControlRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionPlanInstructions" })
  actionPlanInstructions?: string;

  @Metadata({ data: "json, name=actionPlanTitle" })
  actionPlanTitle?: string;

  @Metadata({ data: "json, name=controlMappingSources", elemType: shared.ControlMappingSource })
  controlMappingSources: shared.ControlMappingSource[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=testingInformation" })
  testingInformation?: string;
}


export class UpdateControlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateControlPathParams;

  @Metadata()
  headers: UpdateControlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateControlRequestBody;
}


export class UpdateControlResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateControlResponse?: shared.UpdateControlResponse;

  @Metadata()
  validationException?: any;
}
