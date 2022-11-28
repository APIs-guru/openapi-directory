import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFhirDatastoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId?: string;
}
