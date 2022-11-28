import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";



// DescribeEventCategoriesMessage
/** 
 * <p/>
**/
export class DescribeEventCategoriesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: Filter })
  filters?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
