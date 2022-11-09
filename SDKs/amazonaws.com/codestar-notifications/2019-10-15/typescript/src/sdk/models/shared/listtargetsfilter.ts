import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListTargetsFilterNameEnum } from "./listtargetsfilternameenum";


// ListTargetsFilter
/** 
 * Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of ACTIVE.
**/
export class ListTargetsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: ListTargetsFilterNameEnum;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
