import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsLanguage } from "./globalresourcessharedmodelslanguage";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseGlobalResourcesSharedModelsLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: GlobalResourcesSharedModelsLanguage })
  entities?: GlobalResourcesSharedModelsLanguage[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
