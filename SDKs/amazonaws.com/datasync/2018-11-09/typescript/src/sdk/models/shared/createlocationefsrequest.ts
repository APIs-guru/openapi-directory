import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2Config } from "./ec2config";
import { TagListEntry } from "./taglistentry";



// CreateLocationEfsRequest
/** 
 * CreateLocationEfsRequest
**/
export class CreateLocationEfsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ec2Config" })
  ec2Config: Ec2Config;

  @SpeakeasyMetadata({ data: "json, name=EfsFilesystemArn" })
  efsFilesystemArn: string;

  @SpeakeasyMetadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: TagListEntry })
  tags?: TagListEntry[];
}
