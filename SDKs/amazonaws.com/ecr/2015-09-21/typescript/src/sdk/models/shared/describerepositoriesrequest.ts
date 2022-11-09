import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeRepositoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryNames" })
  repositoryNames?: string[];
}
