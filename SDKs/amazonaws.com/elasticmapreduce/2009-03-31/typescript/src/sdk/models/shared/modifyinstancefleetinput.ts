import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetModifyConfig } from "./instancefleetmodifyconfig";



export class ModifyInstanceFleetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceFleet" })
  instanceFleet: InstanceFleetModifyConfig;
}
