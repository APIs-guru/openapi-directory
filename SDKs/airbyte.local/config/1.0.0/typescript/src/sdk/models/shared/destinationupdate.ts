import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @SpeakeasyMetadata({ data: "json, name=destinationId" })
  destinationId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
