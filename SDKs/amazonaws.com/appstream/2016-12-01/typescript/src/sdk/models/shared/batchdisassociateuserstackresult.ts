import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserStackAssociationError } from "./userstackassociationerror";


export class BatchDisassociateUserStackResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.UserStackAssociationError })
  errors?: UserStackAssociationError[];
}
