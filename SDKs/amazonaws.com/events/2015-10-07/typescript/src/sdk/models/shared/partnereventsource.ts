import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PartnerEventSource
/** 
 * A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.
**/
export class PartnerEventSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
