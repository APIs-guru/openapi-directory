import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleet } from "./instancefleet";



export class ListInstanceFleetsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceFleets", elemType: InstanceFleet })
  instanceFleets?: InstanceFleet[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
