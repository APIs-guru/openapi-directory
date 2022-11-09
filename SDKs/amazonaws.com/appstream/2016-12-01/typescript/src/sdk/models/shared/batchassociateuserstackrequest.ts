import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserStackAssociation } from "./userstackassociation";


export class BatchAssociateUserStackRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserStackAssociations", elemType: shared.UserStackAssociation })
  userStackAssociations: UserStackAssociation[];
}
