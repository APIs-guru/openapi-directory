import { SpeakeasyBase } from "../../../internal/utils";
import { ActionCategoryEnum } from "./actioncategoryenum";
import { ActionConfigurationProperty } from "./actionconfigurationproperty";
import { ArtifactDetails } from "./artifactdetails";
import { ActionTypeSettings } from "./actiontypesettings";
import { Tag } from "./tag";
/**
 * Represents the input of a CreateCustomActionType operation.
**/
export declare class CreateCustomActionTypeInput extends SpeakeasyBase {
    category: ActionCategoryEnum;
    configurationProperties?: ActionConfigurationProperty[];
    inputArtifactDetails: ArtifactDetails;
    outputArtifactDetails: ArtifactDetails;
    provider: string;
    settings?: ActionTypeSettings;
    tags?: Tag[];
    version: string;
}
