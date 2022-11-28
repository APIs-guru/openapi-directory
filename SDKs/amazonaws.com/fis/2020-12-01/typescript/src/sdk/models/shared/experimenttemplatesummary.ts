import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentTemplateSummary
/** 
 * Provides a summary of an experiment template.
**/
export class ExperimentTemplateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
