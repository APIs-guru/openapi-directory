import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareMethodEnum } from "./sharemethodenum";
import { ShareTarget } from "./sharetarget";



export class ShareDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=ShareMethod" })
  shareMethod: ShareMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=ShareNotes" })
  shareNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=ShareTarget" })
  shareTarget: ShareTarget;
}
