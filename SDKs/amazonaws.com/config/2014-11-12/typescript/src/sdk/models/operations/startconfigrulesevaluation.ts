import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartConfigRulesEvaluationXAmzTargetEnum {
    StarlingDoveServiceStartConfigRulesEvaluation = "StarlingDoveService.StartConfigRulesEvaluation"
}


export class StartConfigRulesEvaluationHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StartConfigRulesEvaluationXAmzTargetEnum;
}


export class StartConfigRulesEvaluationRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartConfigRulesEvaluationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartConfigRulesEvaluationRequest;
}


export class StartConfigRulesEvaluationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  noSuchConfigRuleException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  startConfigRulesEvaluationResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
