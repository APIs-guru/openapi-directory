import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStoredQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=QueryName" })
  queryName: string;
}
