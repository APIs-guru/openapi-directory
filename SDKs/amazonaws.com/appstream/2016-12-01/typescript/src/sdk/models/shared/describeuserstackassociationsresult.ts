import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserStackAssociation } from "./userstackassociation";


export class DescribeUserStackAssociationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserStackAssociations", elemType: shared.UserStackAssociation })
  userStackAssociations?: UserStackAssociation[];
}
