import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OcspConfiguration
/** 
 * <p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p> <p>When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p>
**/
export class OcspConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=OcspCustomCname" })
  ocspCustomCname?: string;
}
