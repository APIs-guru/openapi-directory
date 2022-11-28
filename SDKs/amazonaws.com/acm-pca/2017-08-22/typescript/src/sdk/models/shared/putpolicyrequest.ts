import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
