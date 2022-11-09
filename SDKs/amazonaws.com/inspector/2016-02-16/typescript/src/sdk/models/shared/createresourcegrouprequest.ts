import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceGroupTag } from "./resourcegrouptag";


export class CreateResourceGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceGroupTags", elemType: shared.ResourceGroupTag })
  resourceGroupTags: ResourceGroupTag[];
}
