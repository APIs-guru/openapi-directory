import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectorySizeEnum } from "./directorysizeenum";
import { Tag } from "./tag";
import { DirectoryVpcSettings } from "./directoryvpcsettings";



// CreateDirectoryRequest
/** 
 * Contains the inputs for the <a>CreateDirectory</a> operation. 
**/
export class CreateDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=ShortName" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size: DirectorySizeEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcSettings" })
  vpcSettings?: DirectoryVpcSettings;
}
