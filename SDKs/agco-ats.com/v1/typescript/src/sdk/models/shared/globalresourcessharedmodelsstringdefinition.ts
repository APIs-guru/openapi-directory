import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsStringTranslation } from "./globalresourcessharedmodelsstringtranslation";



// GlobalResourcesSharedModelsStringDefinition
/** 
 * The definition of a string to be translated
**/
export class GlobalResourcesSharedModelsStringDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DescriptionForTranslator" })
  descriptionForTranslator: string;

  @SpeakeasyMetadata({ data: "json, name=DoNotTranslate" })
  doNotTranslate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterCount" })
  parameterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=Translations", elemType: GlobalResourcesSharedModelsStringTranslation })
  translations?: GlobalResourcesSharedModelsStringTranslation[];
}
