import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateConfigurationItemsToApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationConfigurationId" })
  applicationConfigurationId: string;

  @SpeakeasyMetadata({ data: "json, name=configurationIds" })
  configurationIds: string[];
}
