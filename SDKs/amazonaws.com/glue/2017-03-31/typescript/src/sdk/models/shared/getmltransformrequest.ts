import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMlTransformRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TransformId" })
  transformId: string;
}
