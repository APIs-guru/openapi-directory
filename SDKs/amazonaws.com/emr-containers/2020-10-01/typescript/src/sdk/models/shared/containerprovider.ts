import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerInfo } from "./containerinfo";
import { ContainerProviderTypeEnum } from "./containerprovidertypeenum";



// ContainerProvider
/** 
 * The information about the container provider.
**/
export class ContainerProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: ContainerInfo;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ContainerProviderTypeEnum;
}
