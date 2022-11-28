import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepublishAction
/** 
 * Describes an action to republish to another topic.
**/
export class RepublishAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=qos" })
  qos?: number;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: string;
}
