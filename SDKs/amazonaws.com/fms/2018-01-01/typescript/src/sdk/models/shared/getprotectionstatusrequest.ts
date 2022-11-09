import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProtectionStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=MemberAccountId" })
  memberAccountId?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PolicyId" })
  policyId: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
