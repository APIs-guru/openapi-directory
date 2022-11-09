import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalResourcesSharedModelsGlobalImage } from "./globalresourcessharedmodelsglobalimage";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseGlobalResourcesSharedModelsGlobalImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.GlobalResourcesSharedModelsGlobalImage })
  entities?: GlobalResourcesSharedModelsGlobalImage[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
