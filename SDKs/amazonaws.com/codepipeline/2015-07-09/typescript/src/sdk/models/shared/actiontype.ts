import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionConfigurationProperty } from "./actionconfigurationproperty";
import { ActionTypeId } from "./actiontypeid";
import { ArtifactDetails } from "./artifactdetails";
import { ActionTypeSettings } from "./actiontypesettings";



// ActionType
/** 
 * Returns information about the details of an action type.
**/
export class ActionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionConfigurationProperties", elemType: ActionConfigurationProperty })
  actionConfigurationProperties?: ActionConfigurationProperty[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: ActionTypeId;

  @SpeakeasyMetadata({ data: "json, name=inputArtifactDetails" })
  inputArtifactDetails: ArtifactDetails;

  @SpeakeasyMetadata({ data: "json, name=outputArtifactDetails" })
  outputArtifactDetails: ArtifactDetails;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: ActionTypeSettings;
}
