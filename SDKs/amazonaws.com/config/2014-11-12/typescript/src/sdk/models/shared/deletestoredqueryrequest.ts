import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStoredQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QueryName" })
  queryName: string;
}
