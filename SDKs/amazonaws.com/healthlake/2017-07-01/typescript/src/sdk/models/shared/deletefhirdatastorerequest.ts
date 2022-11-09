import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFhirDatastoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatastoreId" })
  datastoreId?: string;
}
