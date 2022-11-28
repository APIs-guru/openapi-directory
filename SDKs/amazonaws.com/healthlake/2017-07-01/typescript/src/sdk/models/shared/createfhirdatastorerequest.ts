import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FhirVersionEnum } from "./fhirversionenum";
import { PreloadDataConfig } from "./preloaddataconfig";
import { SseConfiguration } from "./sseconfiguration";
import { Tag } from "./tag";



export class CreateFhirDatastoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreName" })
  datastoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreTypeVersion" })
  datastoreTypeVersion: FhirVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=PreloadDataConfig" })
  preloadDataConfig?: PreloadDataConfig;

  @SpeakeasyMetadata({ data: "json, name=SseConfiguration" })
  sseConfiguration?: SseConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
