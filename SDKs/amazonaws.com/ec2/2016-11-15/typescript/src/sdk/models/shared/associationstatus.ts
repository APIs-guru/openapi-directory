import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusCodeEnum } from "./associationstatuscodeenum";



// AssociationStatus
/** 
 * Describes the state of a target network association.
**/
export class AssociationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: AssociationStatusCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
