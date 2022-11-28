import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinationIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationId" })
  destinationId: string;
}
