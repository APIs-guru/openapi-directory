import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateConfigurationItemsFromApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationConfigurationId" })
  applicationConfigurationId: string;

  @Metadata({ data: "json, name=configurationIds" })
  configurationIds: string[];
}
