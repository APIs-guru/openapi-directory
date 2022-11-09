import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetComplianceDetailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MemberAccount" })
  memberAccount: string;

  @Metadata({ data: "json, name=PolicyId" })
  policyId: string;
}
