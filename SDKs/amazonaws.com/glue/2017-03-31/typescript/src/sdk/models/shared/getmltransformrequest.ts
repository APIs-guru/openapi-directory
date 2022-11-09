import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMlTransformRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransformId" })
  transformId: string;
}
