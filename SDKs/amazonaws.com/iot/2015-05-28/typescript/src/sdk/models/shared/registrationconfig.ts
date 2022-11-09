import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegistrationConfig
/** 
 * The registration configuration.
**/
export class RegistrationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=templateBody" })
  templateBody?: string;
}
