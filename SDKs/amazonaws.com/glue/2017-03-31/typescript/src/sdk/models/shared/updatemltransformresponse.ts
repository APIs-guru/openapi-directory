import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMlTransformResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId?: string;
}
