import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetComplianceDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MemberAccount" })
  memberAccount: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId: string;
}
