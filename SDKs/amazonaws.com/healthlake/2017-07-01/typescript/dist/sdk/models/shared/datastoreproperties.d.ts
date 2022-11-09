import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";
import { FhirVersionEnum } from "./fhirversionenum";
import { PreloadDataConfig } from "./preloaddataconfig";
import { SseConfiguration } from "./sseconfiguration";
/**
 * Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.
**/
export declare class DatastoreProperties extends SpeakeasyBase {
    createdAt?: Date;
    datastoreArn: string;
    datastoreEndpoint: string;
    datastoreId: string;
    datastoreName?: string;
    datastoreStatus: DatastoreStatusEnum;
    datastoreTypeVersion: FhirVersionEnum;
    preloadDataConfig?: PreloadDataConfig;
    sseConfiguration?: SseConfiguration;
}
