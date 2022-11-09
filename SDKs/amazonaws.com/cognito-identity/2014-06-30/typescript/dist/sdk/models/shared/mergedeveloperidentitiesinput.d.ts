import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Input to the <code>MergeDeveloperIdentities</code> action.
**/
export declare class MergeDeveloperIdentitiesInput extends SpeakeasyBase {
    destinationUserIdentifier: string;
    developerProviderName: string;
    identityPoolId: string;
    sourceUserIdentifier: string;
}
