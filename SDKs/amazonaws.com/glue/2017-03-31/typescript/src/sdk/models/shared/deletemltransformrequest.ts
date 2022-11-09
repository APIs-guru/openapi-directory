import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMlTransformRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransformId" })
  transformId: string;
}
