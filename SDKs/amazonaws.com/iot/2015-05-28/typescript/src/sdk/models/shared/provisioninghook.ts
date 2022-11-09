import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisioningHook
/** 
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
export class ProvisioningHook extends SpeakeasyBase {
  @Metadata({ data: "json, name=payloadVersion" })
  payloadVersion?: string;

  @Metadata({ data: "json, name=targetArn" })
  targetArn: string;
}
