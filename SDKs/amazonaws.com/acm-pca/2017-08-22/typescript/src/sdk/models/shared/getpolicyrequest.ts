import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
