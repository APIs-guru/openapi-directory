import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeId } from "./actiontypeid";
import { InputArtifact } from "./inputartifact";
import { OutputArtifact } from "./outputartifact";
/**
 * Represents information about an action declaration.
**/
export declare class ActionDeclaration extends SpeakeasyBase {
    actionTypeId: ActionTypeId;
    configuration?: Map<string, string>;
    inputArtifacts?: InputArtifact[];
    name: string;
    namespace?: string;
    outputArtifacts?: OutputArtifact[];
    region?: string;
    roleArn?: string;
    runOrder?: number;
}
