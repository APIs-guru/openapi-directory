import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";



// DocumentClassifierFilter
/** 
 * Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation.
**/
export class DocumentClassifierFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubmitTimeAfter" })
  submitTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=SubmitTimeBefore" })
  submitTimeBefore?: Date;
}
