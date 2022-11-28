import { SpeakeasyBase } from "../../../internal/utils";
import { MitigationActionIdentifier } from "./mitigationactionidentifier";
export declare class ListMitigationActionsResponse extends SpeakeasyBase {
    actionIdentifiers?: MitigationActionIdentifier[];
    nextToken?: string;
}
