import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserStackAssociationError } from "./userstackassociationerror";



export class BatchDisassociateUserStackResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: UserStackAssociationError })
  errors?: UserStackAssociationError[];
}
