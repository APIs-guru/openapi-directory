import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateContainerAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containerInstance" })
  containerInstance: string;
}
