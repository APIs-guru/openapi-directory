import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntegrationResponse } from "./integrationresponse";



export class GetIntegrationResponsesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: IntegrationResponse })
  items?: IntegrationResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
