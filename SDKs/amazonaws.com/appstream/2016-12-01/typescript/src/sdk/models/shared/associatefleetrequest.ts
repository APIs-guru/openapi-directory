import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetName" })
  fleetName: string;

  @SpeakeasyMetadata({ data: "json, name=StackName" })
  stackName: string;
}
