import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateConnectionWithLagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=lagId" })
  lagId: string;
}
