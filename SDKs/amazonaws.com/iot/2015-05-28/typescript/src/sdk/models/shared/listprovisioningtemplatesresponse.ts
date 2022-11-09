import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisioningTemplateSummary } from "./provisioningtemplatesummary";


export class ListProvisioningTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=templates", elemType: shared.ProvisioningTemplateSummary })
  templates?: ProvisioningTemplateSummary[];
}
