import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FhirVersionEnum } from "./fhirversionenum";
import { PreloadDataConfig } from "./preloaddataconfig";
import { SseConfiguration } from "./sseconfiguration";
import { Tag } from "./tag";


export class CreateFhirDatastoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=DatastoreName" })
  datastoreName?: string;

  @Metadata({ data: "json, name=DatastoreTypeVersion" })
  datastoreTypeVersion: FhirVersionEnum;

  @Metadata({ data: "json, name=PreloadDataConfig" })
  preloadDataConfig?: PreloadDataConfig;

  @Metadata({ data: "json, name=SseConfiguration" })
  sseConfiguration?: SseConfiguration;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
