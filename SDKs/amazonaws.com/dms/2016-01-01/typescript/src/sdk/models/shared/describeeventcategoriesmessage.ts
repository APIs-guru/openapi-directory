import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";


// DescribeEventCategoriesMessage
/** 
 * <p/>
**/
export class DescribeEventCategoriesMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: string;
}
