import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionConfigurationProperty } from "./actionconfigurationproperty";
import { ActionTypeId } from "./actiontypeid";
import { ArtifactDetails } from "./artifactdetails";
import { ArtifactDetails } from "./artifactdetails";
import { ActionTypeSettings } from "./actiontypesettings";


// ActionType
/** 
 * Returns information about the details of an action type.
**/
export class ActionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionConfigurationProperties", elemType: shared.ActionConfigurationProperty })
  actionConfigurationProperties?: ActionConfigurationProperty[];

  @Metadata({ data: "json, name=id" })
  id: ActionTypeId;

  @Metadata({ data: "json, name=inputArtifactDetails" })
  inputArtifactDetails: ArtifactDetails;

  @Metadata({ data: "json, name=outputArtifactDetails" })
  outputArtifactDetails: ArtifactDetails;

  @Metadata({ data: "json, name=settings" })
  settings?: ActionTypeSettings;
}
