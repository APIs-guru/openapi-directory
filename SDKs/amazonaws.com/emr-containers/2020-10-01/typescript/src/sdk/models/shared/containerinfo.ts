import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EksInfo } from "./eksinfo";



// ContainerInfo
/** 
 * The information about the container used for a job run or a managed endpoint.
**/
export class ContainerInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eksInfo" })
  eksInfo?: EksInfo;
}
