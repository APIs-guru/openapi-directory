import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SageMakerPipelineParameter
/** 
 * Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
**/
export class SageMakerPipelineParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
