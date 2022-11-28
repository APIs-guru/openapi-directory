import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OasSupportSharedModelsTranslationKey } from "./oassupportsharedmodelstranslationkey";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";



export class ApiIPagedResponseOasSupportSharedModelsTranslationKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: OasSupportSharedModelsTranslationKey })
  entities?: OasSupportSharedModelsTranslationKey[];

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
