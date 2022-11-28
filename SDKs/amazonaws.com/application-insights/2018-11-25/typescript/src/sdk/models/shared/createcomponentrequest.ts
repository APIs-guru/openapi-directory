import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComponentName" })
  componentName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceList" })
  resourceList: string[];
}
