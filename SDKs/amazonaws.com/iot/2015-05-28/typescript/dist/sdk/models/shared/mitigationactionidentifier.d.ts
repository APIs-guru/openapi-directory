import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information that identifies a mitigation action. This information is returned by ListMitigationActions.
**/
export declare class MitigationActionIdentifier extends SpeakeasyBase {
    actionArn?: string;
    actionName?: string;
    creationDate?: Date;
}
