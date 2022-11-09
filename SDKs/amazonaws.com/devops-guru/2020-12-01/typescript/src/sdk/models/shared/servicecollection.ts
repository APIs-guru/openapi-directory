import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceNameEnum } from "./servicenameenum";


// ServiceCollection
/** 
 * A collection of the names of AWS services.
**/
export class ServiceCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceNames" })
  serviceNames?: ServiceNameEnum[];
}
