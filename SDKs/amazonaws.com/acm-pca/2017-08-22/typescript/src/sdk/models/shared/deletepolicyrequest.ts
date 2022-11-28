import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
