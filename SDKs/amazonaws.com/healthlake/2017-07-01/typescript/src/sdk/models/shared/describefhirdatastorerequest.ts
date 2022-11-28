import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFhirDatastoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatastoreId" })
  datastoreId?: string;
}
