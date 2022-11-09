import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PipelineSummary
/** 
 * Returns a summary of a pipeline.
**/
export class PipelineSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
