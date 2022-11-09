import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateUpdatedImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=existingImageName" })
  existingImageName: string;

  @Metadata({ data: "json, name=newImageDescription" })
  newImageDescription?: string;

  @Metadata({ data: "json, name=newImageDisplayName" })
  newImageDisplayName?: string;

  @Metadata({ data: "json, name=newImageName" })
  newImageName: string;

  @Metadata({ data: "json, name=newImageTags" })
  newImageTags?: Map<string, string>;
}
