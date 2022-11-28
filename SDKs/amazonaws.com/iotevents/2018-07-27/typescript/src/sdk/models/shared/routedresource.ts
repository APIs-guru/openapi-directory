import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoutedResource
/** 
 *  Contains information about the routed resource. 
**/
export class RoutedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
