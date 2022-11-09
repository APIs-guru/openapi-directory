import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceFleet } from "./instancefleet";


export class ListInstanceFleetsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceFleets", elemType: shared.InstanceFleet })
  instanceFleets?: InstanceFleet[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
