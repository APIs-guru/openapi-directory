import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSharedDirectoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerDirectoryId" })
  ownerDirectoryId: string;

  @SpeakeasyMetadata({ data: "json, name=SharedDirectoryIds" })
  sharedDirectoryIds?: string[];
}
