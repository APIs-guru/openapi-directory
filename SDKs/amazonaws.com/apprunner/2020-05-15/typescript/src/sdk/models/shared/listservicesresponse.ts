import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceSummary } from "./servicesummary";


export class ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceSummaryList", elemType: shared.ServiceSummary })
  serviceSummaryList: ServiceSummary[];
}
