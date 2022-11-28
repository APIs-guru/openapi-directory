import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { FindingSource } from "./findingsource";
import { FindingStatusEnum } from "./findingstatusenum";



// Finding
/** 
 * Contains information about a finding.
**/
export class Finding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string[];

  @SpeakeasyMetadata({ data: "json, name=analyzedAt" })
  analyzedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceOwnerAccount" })
  resourceOwnerAccount: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: FindingSource })
  sources?: FindingSource[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: FindingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
