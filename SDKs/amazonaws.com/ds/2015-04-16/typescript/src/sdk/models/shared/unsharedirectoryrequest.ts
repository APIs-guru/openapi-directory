import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UnshareTarget } from "./unsharetarget";


export class UnshareDirectoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=UnshareTarget" })
  unshareTarget: UnshareTarget;
}
