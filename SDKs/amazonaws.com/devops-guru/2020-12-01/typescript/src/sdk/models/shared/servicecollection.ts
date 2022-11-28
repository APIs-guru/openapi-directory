import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceNameEnum } from "./servicenameenum";



// ServiceCollection
/** 
 * A collection of the names of AWS services.
**/
export class ServiceCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceNames" })
  serviceNames?: ServiceNameEnum[];
}
