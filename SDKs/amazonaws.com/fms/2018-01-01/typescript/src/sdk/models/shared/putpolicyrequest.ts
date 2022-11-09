import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Policy } from "./policy";
import { Tag } from "./tag";


export class PutPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy: Policy;

  @Metadata({ data: "json, name=TagList", elemType: shared.Tag })
  tagList?: Tag[];
}
