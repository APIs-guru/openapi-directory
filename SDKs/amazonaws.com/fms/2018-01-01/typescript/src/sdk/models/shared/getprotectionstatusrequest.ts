import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProtectionStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=MemberAccountId" })
  memberAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
