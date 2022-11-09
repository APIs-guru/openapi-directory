import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecurityConfigurationSummary
/** 
 * The creation date and time, and name, of a security configuration.
**/
export class SecurityConfigurationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
