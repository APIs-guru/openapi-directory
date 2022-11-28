import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSchemaFromJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
