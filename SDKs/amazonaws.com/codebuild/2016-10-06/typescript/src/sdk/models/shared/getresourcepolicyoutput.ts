import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcePolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: string;
}
