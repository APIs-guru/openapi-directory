import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";



export class DescribeImageScanFindingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId: ImageIdentifier;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
