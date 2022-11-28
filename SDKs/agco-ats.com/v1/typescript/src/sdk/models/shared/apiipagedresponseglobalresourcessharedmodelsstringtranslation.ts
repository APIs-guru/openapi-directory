import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsStringTranslation } from "./globalresourcessharedmodelsstringtranslation";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseGlobalResourcesSharedModelsStringTranslation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: GlobalResourcesSharedModelsStringTranslation })
  entities?: GlobalResourcesSharedModelsStringTranslation[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
