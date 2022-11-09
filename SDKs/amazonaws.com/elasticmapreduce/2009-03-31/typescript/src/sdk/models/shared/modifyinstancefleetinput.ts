import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceFleetModifyConfig } from "./instancefleetmodifyconfig";


export class ModifyInstanceFleetInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=InstanceFleet" })
  instanceFleet: InstanceFleetModifyConfig;
}
