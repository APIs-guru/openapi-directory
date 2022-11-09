import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Certificate
/** 
 * An object representing the <code>certificate-authority-data</code> for your cluster.
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;
}
