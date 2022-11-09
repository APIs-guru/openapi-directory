import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutStoredQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=QueryArn" })
  queryArn?: string;
}
