import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Replica
/** 
 * Represents the properties of a replica.
**/
export class Replica extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RegionName" })
  regionName?: string;
}
