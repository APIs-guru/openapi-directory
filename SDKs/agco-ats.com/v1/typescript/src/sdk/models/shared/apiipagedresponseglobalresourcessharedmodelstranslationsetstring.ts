import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalResourcesSharedModelsTranslationSetString } from "./globalresourcessharedmodelstranslationsetstring";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetString extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.GlobalResourcesSharedModelsTranslationSetString })
  entities?: GlobalResourcesSharedModelsTranslationSetString[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
