import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamInstanceProfileAssociation } from "./iaminstanceprofileassociation";



export class DescribeIamInstanceProfileAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: IamInstanceProfileAssociation })
  iamInstanceProfileAssociations?: IamInstanceProfileAssociation[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
