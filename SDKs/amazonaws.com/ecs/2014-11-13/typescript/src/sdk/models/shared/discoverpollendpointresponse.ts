import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DiscoverPollEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=telemetryEndpoint" })
  telemetryEndpoint?: string;
}
