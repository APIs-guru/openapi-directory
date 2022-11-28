import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";



export class CreateFhirDatastoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatastoreArn" })
  datastoreArn: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreEndpoint" })
  datastoreEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @SpeakeasyMetadata({ data: "json, name=DatastoreStatus" })
  datastoreStatus: DatastoreStatusEnum;
}
