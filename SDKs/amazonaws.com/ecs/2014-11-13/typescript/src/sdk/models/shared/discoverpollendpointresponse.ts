import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DiscoverPollEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=telemetryEndpoint" })
  telemetryEndpoint?: string;
}
