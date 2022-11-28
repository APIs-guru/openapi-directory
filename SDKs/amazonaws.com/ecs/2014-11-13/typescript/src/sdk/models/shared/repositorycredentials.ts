import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepositoryCredentials
/** 
 * The repository credentials for private registry authentication.
**/
export class RepositoryCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentialsParameter" })
  credentialsParameter: string;
}
