import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserProfileSummary
/** 
 * Information about a user's profile in AWS CodeStar.
**/
export class UserProfileSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=sshPublicKey" })
  sshPublicKey?: string;

  @Metadata({ data: "json, name=userArn" })
  userArn?: string;
}
