import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationDestination
/** 
 * An array of objects representing the details of a replication destination.
**/
export class ReplicationDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=registryId" })
  registryId: string;
}
