import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EksInfo
/** 
 * The information about the EKS cluster.
**/
export class EksInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespace" })
  namespace?: string;
}
