import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelingSetGenerationTaskRunProperties
/** 
 * Specifies configuration properties for a labeling set generation task run.
**/
export class LabelingSetGenerationTaskRunProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=OutputS3Path" })
  outputS3Path?: string;
}
