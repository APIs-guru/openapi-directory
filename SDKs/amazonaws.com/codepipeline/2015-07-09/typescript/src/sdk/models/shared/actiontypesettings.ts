import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionTypeSettings
/** 
 * Returns information about the settings for an action type.
**/
export class ActionTypeSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityUrlTemplate" })
  entityUrlTemplate?: string;

  @Metadata({ data: "json, name=executionUrlTemplate" })
  executionUrlTemplate?: string;

  @Metadata({ data: "json, name=revisionUrlTemplate" })
  revisionUrlTemplate?: string;

  @Metadata({ data: "json, name=thirdPartyConfigurationUrl" })
  thirdPartyConfigurationUrl?: string;
}
