import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLagRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lagId" })
  lagId: string;
}
