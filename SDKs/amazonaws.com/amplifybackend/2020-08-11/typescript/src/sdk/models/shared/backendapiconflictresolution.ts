import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolutionStrategyEnum } from "./resolutionstrategyenum";



// BackendApiConflictResolution
/** 
 * Describes the conflict resolution configuration for your data model configured in your Amplify project.
**/
export class BackendApiConflictResolution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolutionStrategy" })
  resolutionStrategy?: ResolutionStrategyEnum;
}
