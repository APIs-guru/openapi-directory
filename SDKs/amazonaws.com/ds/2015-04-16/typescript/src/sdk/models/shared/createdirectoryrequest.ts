import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectorySizeEnum } from "./directorysizeenum";
import { Tag } from "./tag";
import { DirectoryVpcSettings } from "./directoryvpcsettings";


// CreateDirectoryRequest
/** 
 * Contains the inputs for the <a>CreateDirectory</a> operation. 
**/
export class CreateDirectoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=ShortName" })
  shortName?: string;

  @Metadata({ data: "json, name=Size" })
  size: DirectorySizeEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcSettings" })
  vpcSettings?: DirectoryVpcSettings;
}
