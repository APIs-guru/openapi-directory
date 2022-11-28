import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AllowedNodeTypeModificationsMessage
/** 
 * Represents the allowed node types you can use to modify your cluster or replication group.
**/
export class AllowedNodeTypeModificationsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  scaleDownModifications?: string[];

  @SpeakeasyMetadata()
  scaleUpModifications?: string[];
}
