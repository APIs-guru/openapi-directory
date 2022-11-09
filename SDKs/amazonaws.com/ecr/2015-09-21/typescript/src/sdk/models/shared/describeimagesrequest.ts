import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DescribeImagesFilter } from "./describeimagesfilter";
import { ImageIdentifier } from "./imageidentifier";


export class DescribeImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: DescribeImagesFilter;

  @Metadata({ data: "json, name=imageIds", elemType: shared.ImageIdentifier })
  imageIds?: ImageIdentifier[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
