import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RoutedResource
/** 
 *  Contains information about the routed resource. 
**/
export class RoutedResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
