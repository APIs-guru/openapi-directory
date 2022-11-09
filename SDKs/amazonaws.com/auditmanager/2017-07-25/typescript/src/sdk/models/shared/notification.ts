import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Notification
/** 
 *  The notification used to inform a user of an update in Audit Manager. For example, this includes the notification that is sent when a control set is delegated for review. 
**/
export class Notification extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @Metadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @Metadata({ data: "json, name=controlSetId" })
  controlSetId?: string;

  @Metadata({ data: "json, name=controlSetName" })
  controlSetName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=eventTime" })
  eventTime?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
