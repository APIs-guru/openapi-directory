import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsTranslationSetSourceString } from "./globalresourcessharedmodelstranslationsetsourcestring";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: GlobalResourcesSharedModelsTranslationSetSourceString })
  entities?: GlobalResourcesSharedModelsTranslationSetSourceString[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
