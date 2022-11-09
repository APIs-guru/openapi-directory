import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.
**/
export declare class SourceDefinitionUpdate extends SpeakeasyBase {
    dockerImageTag: string;
    sourceDefinitionId: string;
}
