import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntegrationResponse } from "./integrationresponse";


export class GetIntegrationResponsesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.IntegrationResponse })
  items?: IntegrationResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
