import { SpeakeasyBase } from "../../../internal/utils";
import { IamInstanceProfile } from "./iaminstanceprofile";
import { IamInstanceProfileAssociationStateEnum } from "./iaminstanceprofileassociationstateenum";
/**
 * Describes an association between an IAM instance profile and an instance.
**/
export declare class IamInstanceProfileAssociation extends SpeakeasyBase {
    associationId?: string;
    iamInstanceProfile?: IamInstanceProfile;
    instanceId?: string;
    state?: IamInstanceProfileAssociationStateEnum;
    timestamp?: Date;
}
