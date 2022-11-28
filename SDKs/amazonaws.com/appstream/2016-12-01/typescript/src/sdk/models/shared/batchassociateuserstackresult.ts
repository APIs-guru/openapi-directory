import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserStackAssociationError } from "./userstackassociationerror";



export class BatchAssociateUserStackResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: UserStackAssociationError })
  errors?: UserStackAssociationError[];
}
