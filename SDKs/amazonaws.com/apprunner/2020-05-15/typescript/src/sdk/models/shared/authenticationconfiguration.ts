import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthenticationConfiguration
/** 
 * Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.
**/
export class AuthenticationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessRoleArn" })
  accessRoleArn?: string;

  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;
}
