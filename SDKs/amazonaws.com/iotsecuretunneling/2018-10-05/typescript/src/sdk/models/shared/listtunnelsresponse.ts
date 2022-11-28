import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TunnelSummary } from "./tunnelsummary";



export class ListTunnelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tunnelSummaries", elemType: TunnelSummary })
  tunnelSummaries?: TunnelSummary[];
}
