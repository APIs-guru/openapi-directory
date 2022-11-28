import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthenticationConfiguration
/** 
 * Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.
**/
export class AuthenticationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessRoleArn" })
  accessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;
}
