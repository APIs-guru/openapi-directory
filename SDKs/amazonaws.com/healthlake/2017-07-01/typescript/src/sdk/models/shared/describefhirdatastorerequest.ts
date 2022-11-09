import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeFhirDatastoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatastoreId" })
  datastoreId?: string;
}
