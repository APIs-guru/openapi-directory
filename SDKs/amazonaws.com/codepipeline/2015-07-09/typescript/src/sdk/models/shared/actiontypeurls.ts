import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionTypeUrls
/** 
 * Returns information about URLs for web pages that display to customers as links on the pipeline view, such as an external configuration page for the action type.
**/
export class ActionTypeUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configurationUrl" })
  configurationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=entityUrlTemplate" })
  entityUrlTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=executionUrlTemplate" })
  executionUrlTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionUrlTemplate" })
  revisionUrlTemplate?: string;
}
