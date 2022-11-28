import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStoredQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QueryName" })
  queryName: string;
}
