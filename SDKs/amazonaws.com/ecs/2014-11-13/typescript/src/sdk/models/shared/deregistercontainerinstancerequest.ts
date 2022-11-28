import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterContainerInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=containerInstance" })
  containerInstance: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;
}
