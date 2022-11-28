import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateControlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=controlId" })
  controlId: string;
}


export class UpdateControlHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class UpdateControlRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionPlanInstructions" })
  actionPlanInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=actionPlanTitle" })
  actionPlanTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=controlMappingSources", elemType: shared.ControlMappingSource })
  controlMappingSources: shared.ControlMappingSource[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=testingInformation" })
  testingInformation?: string;
}


export class UpdateControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateControlPathParams;

  @SpeakeasyMetadata()
  headers: UpdateControlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateControlRequestBody;
}


export class UpdateControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateControlResponse?: shared.UpdateControlResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
