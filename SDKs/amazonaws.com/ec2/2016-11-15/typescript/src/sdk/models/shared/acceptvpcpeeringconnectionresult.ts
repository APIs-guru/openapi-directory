import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnection } from "./vpcpeeringconnection";



export class AcceptVpcPeeringConnectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpcPeeringConnection?: VpcPeeringConnection;
}
