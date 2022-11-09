import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryTriggerEventEnumEnum } from "./repositorytriggereventenumenum";


// RepositoryTrigger
/** 
 * Information about a trigger for a repository.
**/
export class RepositoryTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=branches" })
  branches?: string[];

  @Metadata({ data: "json, name=customData" })
  customData?: string;

  @Metadata({ data: "json, name=destinationArn" })
  destinationArn: string;

  @Metadata({ data: "json, name=events" })
  events: RepositoryTriggerEventEnumEnum[];

  @Metadata({ data: "json, name=name" })
  name: string;
}
