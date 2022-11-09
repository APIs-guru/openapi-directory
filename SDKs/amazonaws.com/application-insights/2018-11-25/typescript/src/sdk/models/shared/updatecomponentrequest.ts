import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateComponentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComponentName" })
  componentName: string;

  @Metadata({ data: "json, name=NewComponentName" })
  newComponentName?: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;

  @Metadata({ data: "json, name=ResourceList" })
  resourceList?: string[];
}
