import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ec2Config } from "./ec2config";
import { TagListEntry } from "./taglistentry";


// CreateLocationEfsRequest
/** 
 * CreateLocationEfsRequest
**/
export class CreateLocationEfsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ec2Config" })
  ec2Config: Ec2Config;

  @Metadata({ data: "json, name=EfsFilesystemArn" })
  efsFilesystemArn: string;

  @Metadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.TagListEntry })
  tags?: TagListEntry[];
}
