import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionCategoryEnum } from "./actioncategoryenum";
import { ActionConfigurationProperty } from "./actionconfigurationproperty";
import { ArtifactDetails } from "./artifactdetails";
import { ArtifactDetails } from "./artifactdetails";
import { ActionTypeSettings } from "./actiontypesettings";
import { Tag } from "./tag";


// CreateCustomActionTypeInput
/** 
 * Represents the input of a CreateCustomActionType operation.
**/
export class CreateCustomActionTypeInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: ActionCategoryEnum;

  @Metadata({ data: "json, name=configurationProperties", elemType: shared.ActionConfigurationProperty })
  configurationProperties?: ActionConfigurationProperty[];

  @Metadata({ data: "json, name=inputArtifactDetails" })
  inputArtifactDetails: ArtifactDetails;

  @Metadata({ data: "json, name=outputArtifactDetails" })
  outputArtifactDetails: ArtifactDetails;

  @Metadata({ data: "json, name=provider" })
  provider: string;

  @Metadata({ data: "json, name=settings" })
  settings?: ActionTypeSettings;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=version" })
  version: string;
}
