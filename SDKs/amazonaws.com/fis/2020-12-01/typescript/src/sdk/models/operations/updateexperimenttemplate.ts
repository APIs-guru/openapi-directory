import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateExperimentTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateExperimentTemplateHeaders extends SpeakeasyBase {
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


export class UpdateExperimentTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.UpdateExperimentTemplateActionInputItem })
  actions?: Map<string, shared.UpdateExperimentTemplateActionInputItem>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=stopConditions", elemType: shared.UpdateExperimentTemplateStopConditionInput })
  stopConditions?: shared.UpdateExperimentTemplateStopConditionInput[];

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: shared.UpdateExperimentTemplateTargetInput })
  targets?: Map<string, shared.UpdateExperimentTemplateTargetInput>;
}


export class UpdateExperimentTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateExperimentTemplatePathParams;

  @SpeakeasyMetadata()
  headers: UpdateExperimentTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateExperimentTemplateRequestBody;
}


export class UpdateExperimentTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateExperimentTemplateResponse?: shared.UpdateExperimentTemplateResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
