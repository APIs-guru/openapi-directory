import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribeImagesFilter } from "./describeimagesfilter";
import { ImageIdentifier } from "./imageidentifier";



export class DescribeImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: DescribeImagesFilter;

  @SpeakeasyMetadata({ data: "json, name=imageIds", elemType: ImageIdentifier })
  imageIds?: ImageIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
