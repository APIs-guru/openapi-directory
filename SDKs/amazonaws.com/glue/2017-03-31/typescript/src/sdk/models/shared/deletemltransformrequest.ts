import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMlTransformRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId: string;
}
