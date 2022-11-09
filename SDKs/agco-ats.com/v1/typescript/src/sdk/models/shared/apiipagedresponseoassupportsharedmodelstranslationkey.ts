import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OasSupportSharedModelsTranslationKey } from "./oassupportsharedmodelstranslationkey";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseOasSupportSharedModelsTranslationKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.OasSupportSharedModelsTranslationKey })
  entities?: OasSupportSharedModelsTranslationKey[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
