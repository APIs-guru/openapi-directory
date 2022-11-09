import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TunnelSummary } from "./tunnelsummary";


export class ListTunnelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tunnelSummaries", elemType: shared.TunnelSummary })
  tunnelSummaries?: TunnelSummary[];
}
