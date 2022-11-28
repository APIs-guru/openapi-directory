import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsTranslationRequest } from "./globalresourcessharedmodelstranslationrequest";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseGlobalResourcesSharedModelsTranslationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: GlobalResourcesSharedModelsTranslationRequest })
  entities?: GlobalResourcesSharedModelsTranslationRequest[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
