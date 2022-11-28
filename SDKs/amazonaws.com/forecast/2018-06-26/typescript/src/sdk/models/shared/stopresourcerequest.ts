import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
