import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateExperimentTemplateHeaders extends SpeakeasyBase {
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


export class CreateExperimentTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.CreateExperimentTemplateActionInput })
  actions: Map<string, shared.CreateExperimentTemplateActionInput>;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=stopConditions", elemType: shared.CreateExperimentTemplateStopConditionInput })
  stopConditions: shared.CreateExperimentTemplateStopConditionInput[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: shared.CreateExperimentTemplateTargetInput })
  targets?: Map<string, shared.CreateExperimentTemplateTargetInput>;
}


export class CreateExperimentTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateExperimentTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateExperimentTemplateRequestBody;
}


export class CreateExperimentTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createExperimentTemplateResponse?: shared.CreateExperimentTemplateResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
