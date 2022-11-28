import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsTranslationSet } from "./globalresourcessharedmodelstranslationset";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseGlobalResourcesSharedModelsTranslationSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: GlobalResourcesSharedModelsTranslationSet })
  entities?: GlobalResourcesSharedModelsTranslationSet[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
