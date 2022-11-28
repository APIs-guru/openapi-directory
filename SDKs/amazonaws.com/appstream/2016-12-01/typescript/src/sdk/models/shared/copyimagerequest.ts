import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationImageDescription" })
  destinationImageDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationImageName" })
  destinationImageName: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationRegion" })
  destinationRegion: string;

  @SpeakeasyMetadata({ data: "json, name=SourceImageName" })
  sourceImageName: string;
}
