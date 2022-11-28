import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkGroupConfigurationUpdates } from "./workgroupconfigurationupdates";
import { WorkGroupStateEnum } from "./workgroupstateenum";



export class UpdateWorkGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationUpdates" })
  configurationUpdates?: WorkGroupConfigurationUpdates;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: WorkGroupStateEnum;

  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
