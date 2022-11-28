import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { FindingStatusEnum } from "./findingstatusenum";



// AnalyzedResource
/** 
 * Contains details about the analyzed resource.
**/
export class AnalyzedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions?: string[];

  @SpeakeasyMetadata({ data: "json, name=analyzedAt" })
  analyzedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=isPublic" })
  isPublic: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=resourceOwnerAccount" })
  resourceOwnerAccount: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sharedVia" })
  sharedVia?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FindingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
