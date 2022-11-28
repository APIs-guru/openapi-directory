import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";
import { FhirVersionEnum } from "./fhirversionenum";
import { PreloadDataConfig } from "./preloaddataconfig";
import { SseConfiguration } from "./sseconfiguration";



// DatastoreProperties
/** 
 * Displays the properties of the Data Store, including the ID, Arn, name, and the status of the Data Store.
**/
export class DatastoreProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatastoreArn" })
  datastoreArn: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreEndpoint" })
  datastoreEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreName" })
  datastoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreStatus" })
  datastoreStatus: DatastoreStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=DatastoreTypeVersion" })
  datastoreTypeVersion: FhirVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=PreloadDataConfig" })
  preloadDataConfig?: PreloadDataConfig;

  @SpeakeasyMetadata({ data: "json, name=SseConfiguration" })
  sseConfiguration?: SseConfiguration;
}
