import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMlTransformResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId?: string;
}
