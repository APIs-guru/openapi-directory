import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PipelineSummary
/** 
 * Returns a summary of a pipeline.
**/
export class PipelineSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
