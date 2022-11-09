import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskDefinitionFamilyStatusEnum } from "./taskdefinitionfamilystatusenum";


export class ListTaskDefinitionFamiliesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyPrefix" })
  familyPrefix?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=status" })
  status?: TaskDefinitionFamilyStatusEnum;
}
