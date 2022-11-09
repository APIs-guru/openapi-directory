import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepublishAction
/** 
 * Describes an action to republish to another topic.
**/
export class RepublishAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=qos" })
  qos?: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=topic" })
  topic: string;
}
