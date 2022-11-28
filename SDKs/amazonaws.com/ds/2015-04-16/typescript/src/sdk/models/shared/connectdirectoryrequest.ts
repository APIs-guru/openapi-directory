import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryConnectSettings } from "./directoryconnectsettings";
import { DirectorySizeEnum } from "./directorysizeenum";
import { Tag } from "./tag";



// ConnectDirectoryRequest
/** 
 * Contains the inputs for the <a>ConnectDirectory</a> operation.
**/
export class ConnectDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectSettings" })
  connectSettings: DirectoryConnectSettings;

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
}
