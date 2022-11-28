import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComponentName" })
  componentName: string;

  @SpeakeasyMetadata({ data: "json, name=NewComponentName" })
  newComponentName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceList" })
  resourceList?: string[];
}
