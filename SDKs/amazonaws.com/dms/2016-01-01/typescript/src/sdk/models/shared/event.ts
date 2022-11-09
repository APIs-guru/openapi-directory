import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceTypeEnum } from "./sourcetypeenum";


// Event
/** 
 * Describes an identifiable significant activity that affects a replication instance or task. This object can provide the message, the available event categories, the date and source of the event, and the DMS resource type.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=EventCategories" })
  eventCategories?: string[];

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=SourceIdentifier" })
  sourceIdentifier?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;
}
