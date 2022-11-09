import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerInfo } from "./containerinfo";
import { ContainerProviderTypeEnum } from "./containerprovidertypeenum";


// ContainerProvider
/** 
 * The information about the container provider.
**/
export class ContainerProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=info" })
  info?: ContainerInfo;

  @Metadata({ data: "json, name=type" })
  type: ContainerProviderTypeEnum;
}
