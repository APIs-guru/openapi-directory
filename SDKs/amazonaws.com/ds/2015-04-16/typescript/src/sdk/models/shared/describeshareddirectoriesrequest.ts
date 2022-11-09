import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSharedDirectoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OwnerDirectoryId" })
  ownerDirectoryId: string;

  @Metadata({ data: "json, name=SharedDirectoryIds" })
  sharedDirectoryIds?: string[];
}
