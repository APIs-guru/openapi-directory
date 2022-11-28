import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcePolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;
}
