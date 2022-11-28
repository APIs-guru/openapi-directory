import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateUpdatedImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=existingImageName" })
  existingImageName: string;

  @SpeakeasyMetadata({ data: "json, name=newImageDescription" })
  newImageDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=newImageDisplayName" })
  newImageDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=newImageName" })
  newImageName: string;

  @SpeakeasyMetadata({ data: "json, name=newImageTags" })
  newImageTags?: Map<string, string>;
}
