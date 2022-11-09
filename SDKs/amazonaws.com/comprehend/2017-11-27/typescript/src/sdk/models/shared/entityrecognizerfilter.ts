import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelStatusEnum } from "./modelstatusenum";


// EntityRecognizerFilter
/** 
 * Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the operation./&gt;
**/
export class EntityRecognizerFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;

  @Metadata({ data: "json, name=SubmitTimeAfter" })
  submitTimeAfter?: Date;

  @Metadata({ data: "json, name=SubmitTimeBefore" })
  submitTimeBefore?: Date;
}
