import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutStoredQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QueryArn" })
  queryArn?: string;
}
