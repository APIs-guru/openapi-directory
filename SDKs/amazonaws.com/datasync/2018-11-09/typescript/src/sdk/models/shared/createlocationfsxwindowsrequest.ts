import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagListEntry } from "./taglistentry";



export class CreateLocationFsxWindowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=FsxFilesystemArn" })
  fsxFilesystemArn: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupArns" })
  securityGroupArns: string[];

  @SpeakeasyMetadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: TagListEntry })
  tags?: TagListEntry[];

  @SpeakeasyMetadata({ data: "json, name=User" })
  user: string;
}
