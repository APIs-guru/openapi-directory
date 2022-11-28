import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrunkInterfaceAssociation } from "./trunkinterfaceassociation";



export class AssociateTrunkInterfaceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  interfaceAssociation?: TrunkInterfaceAssociation;
}
