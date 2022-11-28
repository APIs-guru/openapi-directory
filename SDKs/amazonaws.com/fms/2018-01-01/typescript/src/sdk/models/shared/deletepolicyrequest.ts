import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteAllPolicyResources" })
  deleteAllPolicyResources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId: string;
}
