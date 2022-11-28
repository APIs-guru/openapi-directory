import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SageMakerPipelineParameter
/** 
 * Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
**/
export class SageMakerPipelineParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
