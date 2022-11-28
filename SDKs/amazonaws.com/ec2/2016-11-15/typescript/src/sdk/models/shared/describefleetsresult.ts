import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetData } from "./fleetdata";



export class DescribeFleetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FleetData })
  fleets?: FleetData[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
