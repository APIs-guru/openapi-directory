import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalResourcesSharedModelsStringTranslation } from "./globalresourcessharedmodelsstringtranslation";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseGlobalResourcesSharedModelsStringTranslation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.GlobalResourcesSharedModelsStringTranslation })
  entities?: GlobalResourcesSharedModelsStringTranslation[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
