import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExperimentTemplateAction
/** 
 * Describes an action for an experiment template.
**/
export class ExperimentTemplateAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionId" })
  actionId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=startAfter" })
  startAfter?: string[];

  @Metadata({ data: "json, name=targets" })
  targets?: Map<string, string>;
}
