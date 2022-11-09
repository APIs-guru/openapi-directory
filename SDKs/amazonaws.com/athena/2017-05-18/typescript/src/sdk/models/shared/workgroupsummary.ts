import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EngineVersion } from "./engineversion";
import { WorkGroupStateEnum } from "./workgroupstateenum";


// WorkGroupSummary
/** 
 * The summary information for the workgroup, which includes its name, state, description, and the date and time it was created.
**/
export class WorkGroupSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: EngineVersion;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: WorkGroupStateEnum;
}
