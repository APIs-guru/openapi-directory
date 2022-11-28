import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerAnnotations } from "./entityrecognizerannotations";
import { AugmentedManifestsListItem } from "./augmentedmanifestslistitem";
import { EntityRecognizerDataFormatEnum } from "./entityrecognizerdataformatenum";
import { EntityRecognizerDocuments } from "./entityrecognizerdocuments";
import { EntityRecognizerEntityList } from "./entityrecognizerentitylist";
import { EntityTypesListItem } from "./entitytypeslistitem";



// EntityRecognizerInputDataConfig
/** 
 * Specifies the format and location of the input data.
**/
export class EntityRecognizerInputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Annotations" })
  annotations?: EntityRecognizerAnnotations;

  @SpeakeasyMetadata({ data: "json, name=AugmentedManifests", elemType: AugmentedManifestsListItem })
  augmentedManifests?: AugmentedManifestsListItem[];

  @SpeakeasyMetadata({ data: "json, name=DataFormat" })
  dataFormat?: EntityRecognizerDataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=Documents" })
  documents?: EntityRecognizerDocuments;

  @SpeakeasyMetadata({ data: "json, name=EntityList" })
  entityList?: EntityRecognizerEntityList;

  @SpeakeasyMetadata({ data: "json, name=EntityTypes", elemType: EntityTypesListItem })
  entityTypes: EntityTypesListItem[];
}
