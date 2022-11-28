import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamInstanceProfileAssociation } from "./iaminstanceprofileassociation";



export class AssociateIamInstanceProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  iamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}
