import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;
}
