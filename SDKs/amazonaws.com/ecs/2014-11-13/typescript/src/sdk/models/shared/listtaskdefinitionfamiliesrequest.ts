import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskDefinitionFamilyStatusEnum } from "./taskdefinitionfamilystatusenum";



export class ListTaskDefinitionFamiliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyPrefix" })
  familyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskDefinitionFamilyStatusEnum;
}
