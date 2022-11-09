import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateLagRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @Metadata({ data: "json, name=lagId" })
  lagId: string;

  @Metadata({ data: "json, name=lagName" })
  lagName?: string;

  @Metadata({ data: "json, name=minimumLinks" })
  minimumLinks?: number;
}
