import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartnerEventSource } from "./partnereventsource";


export class ListPartnerEventSourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PartnerEventSources", elemType: shared.PartnerEventSource })
  partnerEventSources?: PartnerEventSource[];
}
