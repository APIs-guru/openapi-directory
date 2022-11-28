import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTriggerEventEnumEnum } from "./repositorytriggereventenumenum";



// RepositoryTrigger
/** 
 * Information about a trigger for a repository.
**/
export class RepositoryTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branches" })
  branches?: string[];

  @SpeakeasyMetadata({ data: "json, name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationArn" })
  destinationArn: string;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events: RepositoryTriggerEventEnumEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
