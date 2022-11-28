import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisioningHook
/** 
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
**/
export class ProvisioningHook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payloadVersion" })
  payloadVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=targetArn" })
  targetArn: string;
}
