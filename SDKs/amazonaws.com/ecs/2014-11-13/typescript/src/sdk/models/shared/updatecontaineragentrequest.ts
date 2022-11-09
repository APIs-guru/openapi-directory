import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateContainerAgentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=containerInstance" })
  containerInstance: string;
}
