import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { FindingStatusEnum } from "./findingstatusenum";


// AnalyzedResource
/** 
 * Contains details about the analyzed resource.
**/
export class AnalyzedResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions?: string[];

  @Metadata({ data: "json, name=analyzedAt" })
  analyzedAt: Date;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=isPublic" })
  isPublic: boolean;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=resourceOwnerAccount" })
  resourceOwnerAccount: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: ResourceTypeEnum;

  @Metadata({ data: "json, name=sharedVia" })
  sharedVia?: string[];

  @Metadata({ data: "json, name=status" })
  status?: FindingStatusEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
