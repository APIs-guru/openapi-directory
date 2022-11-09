import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterValue } from "./parametervalue";


// ActivatePipelineInput
/** 
 * Contains the parameters for ActivatePipeline.
**/
export class ActivatePipelineInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameterValues", elemType: shared.ParameterValue })
  parameterValues?: ParameterValue[];

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp?: Date;
}
