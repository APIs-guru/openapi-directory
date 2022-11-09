import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionTypeUrls
/** 
 * Returns information about URLs for web pages that display to customers as links on the pipeline view, such as an external configuration page for the action type.
**/
export class ActionTypeUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationUrl" })
  configurationUrl?: string;

  @Metadata({ data: "json, name=entityUrlTemplate" })
  entityUrlTemplate?: string;

  @Metadata({ data: "json, name=executionUrlTemplate" })
  executionUrlTemplate?: string;

  @Metadata({ data: "json, name=revisionUrlTemplate" })
  revisionUrlTemplate?: string;
}
