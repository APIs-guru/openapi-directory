import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutResourcePolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;
}
