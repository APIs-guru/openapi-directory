import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutResourcePolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;
}
