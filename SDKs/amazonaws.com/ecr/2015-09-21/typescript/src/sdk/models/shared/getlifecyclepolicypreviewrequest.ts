import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecyclePolicyPreviewFilter } from "./lifecyclepolicypreviewfilter";
import { ImageIdentifier } from "./imageidentifier";



export class GetLifecyclePolicyPreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: LifecyclePolicyPreviewFilter;

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
