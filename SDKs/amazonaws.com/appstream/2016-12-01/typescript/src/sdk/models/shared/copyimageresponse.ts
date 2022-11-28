import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationImageName" })
  destinationImageName?: string;
}
