import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionTypeSettings
/** 
 * Returns information about the settings for an action type.
**/
export class ActionTypeSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityUrlTemplate" })
  entityUrlTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=executionUrlTemplate" })
  executionUrlTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionUrlTemplate" })
  revisionUrlTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyConfigurationUrl" })
  thirdPartyConfigurationUrl?: string;
}
