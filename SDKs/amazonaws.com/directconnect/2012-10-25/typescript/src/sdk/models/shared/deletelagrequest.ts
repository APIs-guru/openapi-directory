import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lagId" })
  lagId: string;
}
