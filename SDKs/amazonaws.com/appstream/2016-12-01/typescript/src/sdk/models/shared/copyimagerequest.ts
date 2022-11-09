import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CopyImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationImageDescription" })
  destinationImageDescription?: string;

  @Metadata({ data: "json, name=DestinationImageName" })
  destinationImageName: string;

  @Metadata({ data: "json, name=DestinationRegion" })
  destinationRegion: string;

  @Metadata({ data: "json, name=SourceImageName" })
  sourceImageName: string;
}
