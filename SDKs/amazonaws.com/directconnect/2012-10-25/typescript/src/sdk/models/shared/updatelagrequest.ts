import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateLagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @SpeakeasyMetadata({ data: "json, name=lagId" })
  lagId: string;

  @SpeakeasyMetadata({ data: "json, name=lagName" })
  lagName?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumLinks" })
  minimumLinks?: number;
}
