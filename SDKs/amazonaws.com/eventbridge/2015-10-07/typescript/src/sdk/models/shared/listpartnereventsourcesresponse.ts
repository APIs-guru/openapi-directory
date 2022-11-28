import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartnerEventSource } from "./partnereventsource";



export class ListPartnerEventSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PartnerEventSources", elemType: PartnerEventSource })
  partnerEventSources?: PartnerEventSource[];
}
