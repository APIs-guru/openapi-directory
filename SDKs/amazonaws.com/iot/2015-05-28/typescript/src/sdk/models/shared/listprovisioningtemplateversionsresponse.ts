import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningTemplateVersionSummary } from "./provisioningtemplateversionsummary";



export class ListProvisioningTemplateVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: ProvisioningTemplateVersionSummary })
  versions?: ProvisioningTemplateVersionSummary[];
}
