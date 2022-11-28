import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListIdentitiesResponse
/** 
 * A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.
**/
export class ListIdentitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  identities: string[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
