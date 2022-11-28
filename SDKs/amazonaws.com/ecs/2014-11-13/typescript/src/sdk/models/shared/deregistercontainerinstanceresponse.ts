import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstance } from "./containerinstance";



export class DeregisterContainerInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerInstance" })
  containerInstance?: ContainerInstance;
}
