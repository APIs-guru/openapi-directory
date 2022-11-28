import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
import { Tag } from "./tag";



export class PutPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: Policy;

  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList?: Tag[];
}
