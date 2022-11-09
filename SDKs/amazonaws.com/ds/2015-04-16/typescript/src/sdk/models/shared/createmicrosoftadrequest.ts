import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectoryEditionEnum } from "./directoryeditionenum";
import { Tag } from "./tag";
import { DirectoryVpcSettings } from "./directoryvpcsettings";


// CreateMicrosoftAdRequest
/** 
 * Creates an Managed Microsoft AD directory.
**/
export class CreateMicrosoftAdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Edition" })
  edition?: DirectoryEditionEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=ShortName" })
  shortName?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcSettings" })
  vpcSettings: DirectoryVpcSettings;
}
