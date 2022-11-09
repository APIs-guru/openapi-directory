import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepositoryCredentials
/** 
 * The repository credentials for private registry authentication.
**/
export class RepositoryCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentialsParameter" })
  credentialsParameter: string;
}
