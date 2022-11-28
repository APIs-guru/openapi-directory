import { SpeakeasyBase } from "../../../internal/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";
export declare class CreateFhirDatastoreResponse extends SpeakeasyBase {
    datastoreArn: string;
    datastoreEndpoint: string;
    datastoreId: string;
    datastoreStatus: DatastoreStatusEnum;
}
