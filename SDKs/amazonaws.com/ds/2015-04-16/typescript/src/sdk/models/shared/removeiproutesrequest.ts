import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveIpRoutesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CidrIps" })
  cidrIps: string[];

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
