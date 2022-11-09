import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerInstance } from "./containerinstance";


export class UpdateContainerAgentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerInstance" })
  containerInstance?: ContainerInstance;
}
