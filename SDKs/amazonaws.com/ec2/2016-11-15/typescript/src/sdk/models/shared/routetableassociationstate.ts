import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteTableAssociationStateCodeEnum } from "./routetableassociationstatecodeenum";



// RouteTableAssociationState
/** 
 * Describes the state of an association between a route table and a subnet or gateway.
**/
export class RouteTableAssociationState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: RouteTableAssociationStateCodeEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;
}
