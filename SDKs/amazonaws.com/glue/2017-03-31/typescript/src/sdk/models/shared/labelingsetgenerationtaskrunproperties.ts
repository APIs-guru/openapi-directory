import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelingSetGenerationTaskRunProperties
/** 
 * Specifies configuration properties for a labeling set generation task run.
**/
export class LabelingSetGenerationTaskRunProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OutputS3Path" })
  outputS3Path?: string;
}
