import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkGroupConfigurationUpdates } from "./workgroupconfigurationupdates";
import { WorkGroupStateEnum } from "./workgroupstateenum";


export class UpdateWorkGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationUpdates" })
  configurationUpdates?: WorkGroupConfigurationUpdates;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=State" })
  state?: WorkGroupStateEnum;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
