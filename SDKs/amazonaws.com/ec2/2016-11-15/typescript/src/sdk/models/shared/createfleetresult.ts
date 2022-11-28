import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateFleetError } from "./createfleeterror";
import { CreateFleetInstance } from "./createfleetinstance";



export class CreateFleetResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CreateFleetError })
  errors?: CreateFleetError[];

  @SpeakeasyMetadata()
  fleetId?: string;

  @SpeakeasyMetadata({ elemType: CreateFleetInstance })
  instances?: CreateFleetInstance[];
}
