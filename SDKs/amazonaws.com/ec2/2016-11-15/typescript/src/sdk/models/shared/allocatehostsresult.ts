import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AllocateHostsResult
/** 
 * Contains the output of AllocateHosts.
**/
export class AllocateHostsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hostIds?: string[];
}
