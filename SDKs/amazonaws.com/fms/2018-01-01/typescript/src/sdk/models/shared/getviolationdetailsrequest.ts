import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetViolationDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MemberAccount" })
  memberAccount: string;

  @Metadata({ data: "json, name=PolicyId" })
  policyId: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: string;
}
