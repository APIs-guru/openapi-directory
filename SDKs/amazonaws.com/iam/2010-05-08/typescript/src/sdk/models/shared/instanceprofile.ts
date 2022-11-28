import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
import { Tag } from "./tag";



// InstanceProfile
/** 
 * <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
**/
export class InstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  createDate: Date;

  @SpeakeasyMetadata()
  instanceProfileId: string;

  @SpeakeasyMetadata()
  instanceProfileName: string;

  @SpeakeasyMetadata()
  path: string;

  @SpeakeasyMetadata({ elemType: Role })
  roles: Role[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
