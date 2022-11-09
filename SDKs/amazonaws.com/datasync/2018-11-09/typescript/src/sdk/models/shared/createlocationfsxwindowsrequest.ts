import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagListEntry } from "./taglistentry";


export class CreateLocationFsxWindowsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=FsxFilesystemArn" })
  fsxFilesystemArn: string;

  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=SecurityGroupArns" })
  securityGroupArns: string[];

  @Metadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.TagListEntry })
  tags?: TagListEntry[];

  @Metadata({ data: "json, name=User" })
  user: string;
}
