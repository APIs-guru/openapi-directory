import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusCodeEnum } from "./associationstatuscodeenum";
/**
 * Describes the state of a target network association.
**/
export declare class AssociationStatus extends SpeakeasyBase {
    code?: AssociationStatusCodeEnum;
    message?: string;
}
