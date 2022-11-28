import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentTemplateAction
/** 
 * Describes an action for an experiment template.
**/
export class ExperimentTemplateAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionId" })
  actionId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=startAfter" })
  startAfter?: string[];

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: Map<string, string>;
}
