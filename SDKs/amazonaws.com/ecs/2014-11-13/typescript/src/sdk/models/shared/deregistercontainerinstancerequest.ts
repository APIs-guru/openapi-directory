import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterContainerInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=containerInstance" })
  containerInstance: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;
}
