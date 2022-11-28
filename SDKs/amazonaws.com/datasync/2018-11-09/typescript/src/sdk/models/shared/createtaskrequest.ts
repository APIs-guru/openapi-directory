import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskSchedule } from "./taskschedule";
import { TagListEntry } from "./taglistentry";



// CreateTaskRequest
/** 
 * CreateTaskRequest
**/
export class CreateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogGroupArn" })
  cloudWatchLogGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationLocationArn" })
  destinationLocationArn: string;

  @SpeakeasyMetadata({ data: "json, name=Excludes", elemType: FilterRule })
  excludes?: FilterRule[];

  @SpeakeasyMetadata({ data: "json, name=Includes", elemType: FilterRule })
  includes?: FilterRule[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: Options;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: TaskSchedule;

  @SpeakeasyMetadata({ data: "json, name=SourceLocationArn" })
  sourceLocationArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: TagListEntry })
  tags?: TagListEntry[];
}
