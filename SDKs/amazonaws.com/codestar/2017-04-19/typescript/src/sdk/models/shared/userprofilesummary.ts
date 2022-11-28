import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserProfileSummary
/** 
 * Information about a user's profile in AWS CodeStar.
**/
export class UserProfileSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=sshPublicKey" })
  sshPublicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn?: string;
}
