import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";
import { ActionConfigurationProperty } from "./actionconfigurationproperty";
import { ArtifactDetails } from "./artifactdetails";
import { ActionTypeSettings } from "./actiontypesettings";
import { Tag } from "./tag";



// CreateCustomActionTypeInput
/** 
 * Represents the input of a CreateCustomActionType operation.
**/
export class CreateCustomActionTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: ActionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=configurationProperties", elemType: ActionConfigurationProperty })
  configurationProperties?: ActionConfigurationProperty[];

  @SpeakeasyMetadata({ data: "json, name=inputArtifactDetails" })
  inputArtifactDetails: ArtifactDetails;

  @SpeakeasyMetadata({ data: "json, name=outputArtifactDetails" })
  outputArtifactDetails: ArtifactDetails;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: ActionTypeSettings;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
