import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatus } from "./associationstatus";



export class AssociateClientVpnTargetNetworkResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  status?: AssociationStatus;
}
