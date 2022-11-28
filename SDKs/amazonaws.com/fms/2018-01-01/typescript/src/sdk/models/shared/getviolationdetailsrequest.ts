import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetViolationDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MemberAccount" })
  memberAccount: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: string;
}
