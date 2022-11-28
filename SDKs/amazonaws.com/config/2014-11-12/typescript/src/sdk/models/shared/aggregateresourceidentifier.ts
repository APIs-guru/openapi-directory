import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// AggregateResourceIdentifier
/** 
 * The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.
**/
export class AggregateResourceIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceAccountId" })
  sourceAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=SourceRegion" })
  sourceRegion: string;
}
