import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// AggregateResourceIdentifier
/** 
 * The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.
**/
export class AggregateResourceIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ResourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: ResourceTypeEnum;

  @Metadata({ data: "json, name=SourceAccountId" })
  sourceAccountId: string;

  @Metadata({ data: "json, name=SourceRegion" })
  sourceRegion: string;
}
