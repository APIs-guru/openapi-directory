import { SpeakeasyBase } from "../../../internal/utils";
import { ActionConfigurationProperty } from "./actionconfigurationproperty";
import { ActionTypeId } from "./actiontypeid";
import { ArtifactDetails } from "./artifactdetails";
import { ActionTypeSettings } from "./actiontypesettings";
/**
 * Returns information about the details of an action type.
**/
export declare class ActionType extends SpeakeasyBase {
    actionConfigurationProperties?: ActionConfigurationProperty[];
    id: ActionTypeId;
    inputArtifactDetails: ArtifactDetails;
    outputArtifactDetails: ArtifactDetails;
    settings?: ActionTypeSettings;
}
