import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CopyImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationImageName" })
  destinationImageName?: string;
}
