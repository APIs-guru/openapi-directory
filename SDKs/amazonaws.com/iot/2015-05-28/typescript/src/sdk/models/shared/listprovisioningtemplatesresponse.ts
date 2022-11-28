import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningTemplateSummary } from "./provisioningtemplatesummary";



export class ListProvisioningTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=templates", elemType: ProvisioningTemplateSummary })
  templates?: ProvisioningTemplateSummary[];
}
