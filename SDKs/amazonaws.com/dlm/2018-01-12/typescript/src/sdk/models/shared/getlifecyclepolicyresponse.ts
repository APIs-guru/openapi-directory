import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifecyclePolicy } from "./lifecyclepolicy";


export class GetLifecyclePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: LifecyclePolicy;
}
