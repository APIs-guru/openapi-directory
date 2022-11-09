import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareMethodEnum } from "./sharemethodenum";
import { ShareTarget } from "./sharetarget";


export class ShareDirectoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=ShareMethod" })
  shareMethod: ShareMethodEnum;

  @Metadata({ data: "json, name=ShareNotes" })
  shareNotes?: string;

  @Metadata({ data: "json, name=ShareTarget" })
  shareTarget: ShareTarget;
}
