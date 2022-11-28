import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Notification
/** 
 *  The notification used to inform a user of an update in Audit Manager. For example, this includes the notification that is sent when a control set is delegated for review. 
**/
export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSetId" })
  controlSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSetName" })
  controlSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
