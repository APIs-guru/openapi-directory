import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStoredQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=QueryName" })
  queryName: string;
}
