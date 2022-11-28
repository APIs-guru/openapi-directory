import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EksInfo
/** 
 * The information about the EKS cluster.
**/
export class EksInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;
}
