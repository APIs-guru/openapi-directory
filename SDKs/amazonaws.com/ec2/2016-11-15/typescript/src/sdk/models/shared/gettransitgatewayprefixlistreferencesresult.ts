import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayPrefixListReference } from "./transitgatewayprefixlistreference";



export class GetTransitGatewayPrefixListReferencesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: TransitGatewayPrefixListReference })
  transitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[];
}
