import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocationFilterNameEnum } from "./locationfilternameenum";
import { OperatorEnum } from "./operatorenum";


// LocationFilter
/** 
 * You can use API filters to narrow down the list of resources returned by <code>ListLocations</code>. For example, to retrieve all your Amazon S3 locations, you can use <code>ListLocations</code> with filter name <code>LocationType S3</code> and <code>Operator Equals</code>.
**/
export class LocationFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: LocationFilterNameEnum;

  @Metadata({ data: "json, name=Operator" })
  operator: OperatorEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
