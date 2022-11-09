import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityRecognizerAnnotations } from "./entityrecognizerannotations";
import { AugmentedManifestsListItem } from "./augmentedmanifestslistitem";
import { EntityRecognizerDataFormatEnum } from "./entityrecognizerdataformatenum";
import { EntityRecognizerDocuments } from "./entityrecognizerdocuments";
import { EntityRecognizerEntityList } from "./entityrecognizerentitylist";
import { EntityTypesListItem } from "./entitytypeslistitem";
/**
 * Specifies the format and location of the input data.
**/
export declare class EntityRecognizerInputDataConfig extends SpeakeasyBase {
    annotations?: EntityRecognizerAnnotations;
    augmentedManifests?: AugmentedManifestsListItem[];
    dataFormat?: EntityRecognizerDataFormatEnum;
    documents?: EntityRecognizerDocuments;
    entityList?: EntityRecognizerEntityList;
    entityTypes: EntityTypesListItem[];
}
