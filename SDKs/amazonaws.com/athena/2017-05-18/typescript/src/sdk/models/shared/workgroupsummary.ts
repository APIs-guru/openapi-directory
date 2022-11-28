import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EngineVersion } from "./engineversion";
import { WorkGroupStateEnum } from "./workgroupstateenum";



// WorkGroupSummary
/** 
 * The summary information for the workgroup, which includes its name, state, description, and the date and time it was created.
**/
export class WorkGroupSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: EngineVersion;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: WorkGroupStateEnum;
}
