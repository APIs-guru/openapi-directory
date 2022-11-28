import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnection } from "./vpcpeeringconnection";



export class CreateVpcPeeringConnectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpcPeeringConnection?: VpcPeeringConnection;
}
