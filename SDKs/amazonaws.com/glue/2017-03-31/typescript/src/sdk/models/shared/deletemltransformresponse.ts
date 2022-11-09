import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMlTransformResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransformId" })
  transformId?: string;
}
