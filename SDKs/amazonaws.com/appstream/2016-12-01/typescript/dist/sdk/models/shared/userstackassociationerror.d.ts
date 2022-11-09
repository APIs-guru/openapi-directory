import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UserStackAssociationErrorCodeEnum } from "./userstackassociationerrorcodeenum";
import { UserStackAssociation } from "./userstackassociation";
/**
 * Describes the error that is returned when a user can’t be associated with or disassociated from a stack.
**/
export declare class UserStackAssociationError extends SpeakeasyBase {
    errorCode?: UserStackAssociationErrorCodeEnum;
    errorMessage?: string;
    userStackAssociation?: UserStackAssociation;
}
