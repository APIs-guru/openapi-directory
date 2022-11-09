import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";
import { FhirVersionEnum } from "./fhirversionenum";
import { PreloadDataConfig } from "./preloaddataconfig";
import { SseConfiguration } from "./sseconfiguration";


// DatastoreProperties
/** 
 * Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.
**/
export class DatastoreProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DatastoreArn" })
  datastoreArn: string;

  @Metadata({ data: "json, name=DatastoreEndpoint" })
  datastoreEndpoint: string;

  @Metadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @Metadata({ data: "json, name=DatastoreName" })
  datastoreName?: string;

  @Metadata({ data: "json, name=DatastoreStatus" })
  datastoreStatus: DatastoreStatusEnum;

  @Metadata({ data: "json, name=DatastoreTypeVersion" })
  datastoreTypeVersion: FhirVersionEnum;

  @Metadata({ data: "json, name=PreloadDataConfig" })
  preloadDataConfig?: PreloadDataConfig;

  @Metadata({ data: "json, name=SseConfiguration" })
  sseConfiguration?: SseConfiguration;
}
