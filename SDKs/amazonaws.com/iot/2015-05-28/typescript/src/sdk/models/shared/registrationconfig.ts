import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegistrationConfig
/** 
 * The registration configuration.
**/
export class RegistrationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody?: string;
}
