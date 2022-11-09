import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelStatusEnum } from "./modelstatusenum";


// DocumentClassifierFilter
/** 
 * Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation.
**/
export class DocumentClassifierFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;

  @Metadata({ data: "json, name=SubmitTimeAfter" })
  submitTimeAfter?: Date;

  @Metadata({ data: "json, name=SubmitTimeBefore" })
  submitTimeBefore?: Date;
}
