import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityConfigurationSummary
/** 
 * The creation date and time, and name, of a security configuration.
**/
export class SecurityConfigurationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
