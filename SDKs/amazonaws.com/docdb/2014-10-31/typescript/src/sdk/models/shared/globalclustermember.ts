import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalClusterMember
/** 
 * A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters. 
**/
export class GlobalClusterMember extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterArn?: string;

  @SpeakeasyMetadata()
  isWriter?: boolean;

  @SpeakeasyMetadata()
  readers?: string[];
}
