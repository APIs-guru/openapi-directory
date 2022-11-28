import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Certificate
/** 
 * An object representing the <code>certificate-authority-data</code> for your cluster.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;
}
