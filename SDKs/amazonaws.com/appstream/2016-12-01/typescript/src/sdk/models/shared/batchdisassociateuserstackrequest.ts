import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserStackAssociation } from "./userstackassociation";



export class BatchDisassociateUserStackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserStackAssociations", elemType: UserStackAssociation })
  userStackAssociations: UserStackAssociation[];
}
