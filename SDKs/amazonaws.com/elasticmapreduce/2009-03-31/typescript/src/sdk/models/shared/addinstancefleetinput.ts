import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceFleetConfig } from "./instancefleetconfig";


export class AddInstanceFleetInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=InstanceFleet" })
  instanceFleet: InstanceFleetConfig;
}
