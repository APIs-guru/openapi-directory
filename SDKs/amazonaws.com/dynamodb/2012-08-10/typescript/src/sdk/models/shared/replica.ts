import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Replica
/** 
 * Represents the properties of a replica.
**/
export class Replica extends SpeakeasyBase {
  @Metadata({ data: "json, name=RegionName" })
  regionName?: string;
}
