import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PeeringConnectionOptions } from "./peeringconnectionoptions";



export class ModifyVpcPeeringConnectionOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepterPeeringConnectionOptions?: PeeringConnectionOptions;

  @SpeakeasyMetadata()
  requesterPeeringConnectionOptions?: PeeringConnectionOptions;
}
