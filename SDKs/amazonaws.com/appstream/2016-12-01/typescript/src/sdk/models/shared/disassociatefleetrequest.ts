import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetName" })
  fleetName: string;

  @Metadata({ data: "json, name=StackName" })
  stackName: string;
}
