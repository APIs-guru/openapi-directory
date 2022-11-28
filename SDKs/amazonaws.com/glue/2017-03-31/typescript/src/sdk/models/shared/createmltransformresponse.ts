import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMlTransformResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId?: string;
}
