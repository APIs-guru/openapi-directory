import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DestinationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionConfiguration" })
  connectionConfiguration: any;

  @Metadata({ data: "json, name=destinationId" })
  destinationId: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
