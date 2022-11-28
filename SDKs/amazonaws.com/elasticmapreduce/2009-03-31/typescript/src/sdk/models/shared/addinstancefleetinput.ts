import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetConfig } from "./instancefleetconfig";



export class AddInstanceFleetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceFleet" })
  instanceFleet: InstanceFleetConfig;
}
