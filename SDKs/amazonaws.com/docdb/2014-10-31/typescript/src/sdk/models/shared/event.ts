import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



// Event
/** 
 * Detailed information about an event.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata()
  date?: Date;

  @SpeakeasyMetadata()
  eventCategories?: string[];

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  sourceArn?: string;

  @SpeakeasyMetadata()
  sourceIdentifier?: string;

  @SpeakeasyMetadata()
  sourceType?: SourceTypeEnum;
}
