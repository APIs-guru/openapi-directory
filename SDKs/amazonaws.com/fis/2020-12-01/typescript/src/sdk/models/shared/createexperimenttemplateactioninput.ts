import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateExperimentTemplateActionInput
/** 
 * Specifies an action for an experiment template.
**/
export class CreateExperimentTemplateActionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionId" })
  actionId: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=startAfter" })
  startAfter?: string[];

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: Map<string, string>;
}
