import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceGroupTag } from "./resourcegrouptag";



export class CreateResourceGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceGroupTags", elemType: ResourceGroupTag })
  resourceGroupTags: ResourceGroupTag[];
}
