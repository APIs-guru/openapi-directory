import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalResourcesSharedModelsFileDownload } from "./globalresourcessharedmodelsfiledownload";
import { ApiPagedResponseMetadata } from "./apipagedresponsemetadata";


export class ApiIPagedResponseGlobalResourcesSharedModelsFileDownload extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.GlobalResourcesSharedModelsFileDownload })
  entities?: GlobalResourcesSharedModelsFileDownload[];

  @Metadata({ data: "json, name=Metadata" })
  metadata?: ApiPagedResponseMetadata;
}
