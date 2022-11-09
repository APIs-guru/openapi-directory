import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectoryConnectSettings } from "./directoryconnectsettings";
import { DirectorySizeEnum } from "./directorysizeenum";
import { Tag } from "./tag";


// ConnectDirectoryRequest
/** 
 * Contains the inputs for the <a>ConnectDirectory</a> operation.
**/
export class ConnectDirectoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectSettings" })
  connectSettings: DirectoryConnectSettings;

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
}
