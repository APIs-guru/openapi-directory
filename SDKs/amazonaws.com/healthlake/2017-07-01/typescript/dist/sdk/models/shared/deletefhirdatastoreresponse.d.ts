import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastoreStatusEnum } from "./datastorestatusenum";
export declare class DeleteFhirDatastoreResponse extends SpeakeasyBase {
    datastoreArn: string;
    datastoreEndpoint: string;
    datastoreId: string;
    datastoreStatus: DatastoreStatusEnum;
}
