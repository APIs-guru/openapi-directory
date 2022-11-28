import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnshareTarget } from "./unsharetarget";



export class UnshareDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=UnshareTarget" })
  unshareTarget: UnshareTarget;
}
