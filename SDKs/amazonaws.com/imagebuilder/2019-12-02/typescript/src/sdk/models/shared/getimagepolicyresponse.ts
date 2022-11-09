import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetImagePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
