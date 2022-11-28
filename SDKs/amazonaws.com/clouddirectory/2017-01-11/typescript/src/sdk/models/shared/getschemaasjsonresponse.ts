import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSchemaAsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
