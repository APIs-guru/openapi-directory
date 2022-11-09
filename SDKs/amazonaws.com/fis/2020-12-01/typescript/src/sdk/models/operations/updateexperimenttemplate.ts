import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateExperimentTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateExperimentTemplateHeaders extends SpeakeasyBase {
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


export class UpdateExperimentTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.UpdateExperimentTemplateActionInputItem })
  actions?: Map<string, shared.UpdateExperimentTemplateActionInputItem>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=stopConditions", elemType: shared.UpdateExperimentTemplateStopConditionInput })
  stopConditions?: shared.UpdateExperimentTemplateStopConditionInput[];

  @Metadata({ data: "json, name=targets", elemType: shared.UpdateExperimentTemplateTargetInput })
  targets?: Map<string, shared.UpdateExperimentTemplateTargetInput>;
}


export class UpdateExperimentTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateExperimentTemplatePathParams;

  @Metadata()
  headers: UpdateExperimentTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateExperimentTemplateRequestBody;
}


export class UpdateExperimentTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateExperimentTemplateResponse?: shared.UpdateExperimentTemplateResponse;

  @Metadata()
  validationException?: any;
}
