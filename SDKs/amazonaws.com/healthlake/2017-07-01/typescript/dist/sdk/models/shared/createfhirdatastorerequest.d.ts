import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FhirVersionEnum } from "./fhirversionenum";
import { PreloadDataConfig } from "./preloaddataconfig";
import { SseConfiguration } from "./sseconfiguration";
import { Tag } from "./tag";
export declare class CreateFhirDatastoreRequest extends SpeakeasyBase {
    clientToken?: string;
    datastoreName?: string;
    datastoreTypeVersion: FhirVersionEnum;
    preloadDataConfig?: PreloadDataConfig;
    sseConfiguration?: SseConfiguration;
    tags?: Tag[];
}
