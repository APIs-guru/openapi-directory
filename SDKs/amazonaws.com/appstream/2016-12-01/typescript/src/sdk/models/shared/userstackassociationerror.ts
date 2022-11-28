import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserStackAssociationErrorCodeEnum } from "./userstackassociationerrorcodeenum";
import { UserStackAssociation } from "./userstackassociation";



// UserStackAssociationError
/** 
 * Describes the error that is returned when a user can’t be associated with or disassociated from a stack. 
**/
export class UserStackAssociationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: UserStackAssociationErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=UserStackAssociation" })
  userStackAssociation?: UserStackAssociation;
}
