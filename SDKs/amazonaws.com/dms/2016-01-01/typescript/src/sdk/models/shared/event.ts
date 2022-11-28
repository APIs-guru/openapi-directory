import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



// Event
/** 
 * Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the DMS resource type.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=EventCategories" })
  eventCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceIdentifier" })
  sourceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;
}
