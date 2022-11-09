import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Annotations" })
  annotations?: EntityRecognizerAnnotations;

  @Metadata({ data: "json, name=AugmentedManifests", elemType: shared.AugmentedManifestsListItem })
  augmentedManifests?: AugmentedManifestsListItem[];

  @Metadata({ data: "json, name=DataFormat" })
  dataFormat?: EntityRecognizerDataFormatEnum;

  @Metadata({ data: "json, name=Documents" })
  documents?: EntityRecognizerDocuments;

  @Metadata({ data: "json, name=EntityList" })
  entityList?: EntityRecognizerEntityList;

  @Metadata({ data: "json, name=EntityTypes", elemType: shared.EntityTypesListItem })
  entityTypes: EntityTypesListItem[];
}
