import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExperimentTemplateSummary
/** 
 * Provides a summary of an experiment template.
**/
export class ExperimentTemplateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
