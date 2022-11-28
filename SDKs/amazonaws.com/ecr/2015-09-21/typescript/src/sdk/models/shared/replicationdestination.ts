import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationDestination
/** 
 * An array of objects representing the details of a replication destination.
**/
export class ReplicationDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId: string;
}
