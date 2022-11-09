import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";


export class CreateFhirDatastoreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatastoreArn" })
  datastoreArn: string;

  @Metadata({ data: "json, name=DatastoreEndpoint" })
  datastoreEndpoint: string;

  @Metadata({ data: "json, name=DatastoreId" })
  datastoreId: string;

  @Metadata({ data: "json, name=DatastoreStatus" })
  datastoreStatus: DatastoreStatusEnum;
}
