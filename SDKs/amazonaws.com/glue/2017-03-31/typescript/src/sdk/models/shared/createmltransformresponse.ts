import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMlTransformResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransformId" })
  transformId?: string;
}
