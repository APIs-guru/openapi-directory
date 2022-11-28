import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstance } from "./containerinstance";



export class RegisterContainerInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerInstance" })
  containerInstance?: ContainerInstance;
}
