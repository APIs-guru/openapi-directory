import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateConnectionWithLagRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId: string;

  @Metadata({ data: "json, name=lagId" })
  lagId: string;
}
