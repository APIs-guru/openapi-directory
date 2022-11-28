import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamInstanceProfile } from "./iaminstanceprofile";
import { IamInstanceProfileAssociationStateEnum } from "./iaminstanceprofileassociationstateenum";



// IamInstanceProfileAssociation
/** 
 * Describes an association between an IAM instance profile and an instance.
**/
export class IamInstanceProfileAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  iamInstanceProfile?: IamInstanceProfile;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  state?: IamInstanceProfileAssociationStateEnum;

  @SpeakeasyMetadata()
  timestamp?: Date;
}
