import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveIpRoutesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CidrIps" })
  cidrIps: string[];

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
