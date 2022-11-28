import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNamedQueryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=QueryString" })
  queryString: string;

  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}
