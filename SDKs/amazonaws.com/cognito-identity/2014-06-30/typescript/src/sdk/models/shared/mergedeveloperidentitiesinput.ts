import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MergeDeveloperIdentitiesInput
/** 
 * Input to the <code>MergeDeveloperIdentities</code> action.
**/
export class MergeDeveloperIdentitiesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationUserIdentifier" })
  destinationUserIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=DeveloperProviderName" })
  developerProviderName: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=SourceUserIdentifier" })
  sourceUserIdentifier: string;
}
