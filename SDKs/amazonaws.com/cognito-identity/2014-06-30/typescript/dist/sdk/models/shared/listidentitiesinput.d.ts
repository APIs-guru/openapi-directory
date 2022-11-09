import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Input to the ListIdentities action.
**/
export declare class ListIdentitiesInput extends SpeakeasyBase {
    hideDisabled?: boolean;
    identityPoolId: string;
    maxResults: number;
    nextToken?: string;
}
