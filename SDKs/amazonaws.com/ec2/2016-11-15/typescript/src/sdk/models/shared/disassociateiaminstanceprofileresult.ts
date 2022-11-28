import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamInstanceProfileAssociation } from "./iaminstanceprofileassociation";



export class DisassociateIamInstanceProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  iamInstanceProfileAssociation?: IamInstanceProfileAssociation;
}
