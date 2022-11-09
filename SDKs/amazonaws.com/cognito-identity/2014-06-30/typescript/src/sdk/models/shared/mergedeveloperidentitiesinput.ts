import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MergeDeveloperIdentitiesInput
/** 
 * Input to the <code>MergeDeveloperIdentities</code> action.
**/
export class MergeDeveloperIdentitiesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationUserIdentifier" })
  destinationUserIdentifier: string;

  @Metadata({ data: "json, name=DeveloperProviderName" })
  developerProviderName: string;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @Metadata({ data: "json, name=SourceUserIdentifier" })
  sourceUserIdentifier: string;
}
