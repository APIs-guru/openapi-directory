import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { FindingSource } from "./findingsource";
import { FindingStatusEnum } from "./findingstatusenum";


// FindingSummary
/** 
 * Contains information about a finding.
**/
export class FindingSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string[];

  @Metadata({ data: "json, name=analyzedAt" })
  analyzedAt: Date;

  @Metadata({ data: "json, name=condition" })
  condition: Map<string, string>;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=principal" })
  principal?: Map<string, string>;

  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=resourceOwnerAccount" })
  resourceOwnerAccount: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;

  @Metadata({ data: "json, name=sources", elemType: shared.FindingSource })
  sources?: FindingSource[];

  @Metadata({ data: "json, name=status" })
  status: FindingStatusEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
