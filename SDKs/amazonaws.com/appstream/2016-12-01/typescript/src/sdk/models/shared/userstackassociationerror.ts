import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserStackAssociationErrorCodeEnum } from "./userstackassociationerrorcodeenum";
import { UserStackAssociation } from "./userstackassociation";


// UserStackAssociationError
/** 
 * Describes the error that is returned when a user can’t be associated with or disassociated from a stack. 
**/
export class UserStackAssociationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: UserStackAssociationErrorCodeEnum;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=UserStackAssociation" })
  userStackAssociation?: UserStackAssociation;
}
