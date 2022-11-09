import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateConnectionFromLagRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=lagId" })
  lagId: string;
}
