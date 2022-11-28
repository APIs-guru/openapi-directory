import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryEditionEnum } from "./directoryeditionenum";
import { Tag } from "./tag";
import { DirectoryVpcSettings } from "./directoryvpcsettings";



// CreateMicrosoftAdRequest
/** 
 * Creates an Managed Microsoft AD directory.
**/
export class CreateMicrosoftAdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Edition" })
  edition?: DirectoryEditionEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=ShortName" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcSettings" })
  vpcSettings: DirectoryVpcSettings;
}
