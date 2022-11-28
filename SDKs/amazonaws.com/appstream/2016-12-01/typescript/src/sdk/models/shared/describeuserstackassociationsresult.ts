import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserStackAssociation } from "./userstackassociation";



export class DescribeUserStackAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserStackAssociations", elemType: UserStackAssociation })
  userStackAssociations?: UserStackAssociation[];
}
