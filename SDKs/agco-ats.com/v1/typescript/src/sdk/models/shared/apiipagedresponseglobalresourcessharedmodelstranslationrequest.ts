import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalResourcesSharedModelsTranslationRequest } from "./globalresourcessharedmodelstranslationrequest";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseGlobalResourcesSharedModelsTranslationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.GlobalResourcesSharedModelsTranslationRequest })
  entities?: GlobalResourcesSharedModelsTranslationRequest[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
