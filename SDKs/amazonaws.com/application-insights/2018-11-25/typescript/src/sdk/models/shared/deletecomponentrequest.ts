import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteComponentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComponentName" })
  componentName: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName: string;
}
