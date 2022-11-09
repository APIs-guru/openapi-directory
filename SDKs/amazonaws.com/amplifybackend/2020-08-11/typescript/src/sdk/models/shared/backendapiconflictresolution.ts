import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResolutionStrategyEnum } from "./resolutionstrategyenum";


// BackendApiConflictResolution
/** 
 * Describes the conflict resolution configuration for your data model configured in your Amplify project.
**/
export class BackendApiConflictResolution extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResolutionStrategy" })
  resolutionStrategy?: ResolutionStrategyEnum;
}
