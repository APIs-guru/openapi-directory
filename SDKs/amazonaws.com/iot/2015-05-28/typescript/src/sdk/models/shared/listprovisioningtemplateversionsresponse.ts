import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisioningTemplateVersionSummary } from "./provisioningtemplateversionsummary";


export class ListProvisioningTemplateVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=versions", elemType: shared.ProvisioningTemplateVersionSummary })
  versions?: ProvisioningTemplateVersionSummary[];
}
