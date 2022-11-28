import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrunkInterfaceAssociation } from "./trunkinterfaceassociation";



export class DescribeTrunkInterfaceAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TrunkInterfaceAssociation })
  interfaceAssociations?: TrunkInterfaceAssociation[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
