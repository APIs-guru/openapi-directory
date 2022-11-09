import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalResourcesSharedModelsStringTranslation } from "./globalresourcessharedmodelsstringtranslation";


// GlobalResourcesSharedModelsStringDefinition
/** 
 * The definition of a string to be translated
**/
export class GlobalResourcesSharedModelsStringDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=DescriptionForTranslator" })
  descriptionForTranslator: string;

  @Metadata({ data: "json, name=DoNotTranslate" })
  doNotTranslate?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ParameterCount" })
  parameterCount?: number;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=Translations", elemType: shared.GlobalResourcesSharedModelsStringTranslation })
  translations?: GlobalResourcesSharedModelsStringTranslation[];
}
