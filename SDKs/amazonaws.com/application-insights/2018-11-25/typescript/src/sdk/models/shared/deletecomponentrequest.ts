import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComponentName" })
  componentName: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}
