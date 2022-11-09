import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetComponentPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
