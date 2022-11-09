import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterRule } from "./filterrule";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TaskSchedule } from "./taskschedule";
import { TagListEntry } from "./taglistentry";


// CreateTaskRequest
/** 
 * CreateTaskRequest
**/
export class CreateTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogGroupArn" })
  cloudWatchLogGroupArn?: string;

  @Metadata({ data: "json, name=DestinationLocationArn" })
  destinationLocationArn: string;

  @Metadata({ data: "json, name=Excludes", elemType: shared.FilterRule })
  excludes?: FilterRule[];

  @Metadata({ data: "json, name=Includes", elemType: shared.FilterRule })
  includes?: FilterRule[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Options" })
  options?: Options;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: TaskSchedule;

  @Metadata({ data: "json, name=SourceLocationArn" })
  sourceLocationArn: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.TagListEntry })
  tags?: TagListEntry[];
}
