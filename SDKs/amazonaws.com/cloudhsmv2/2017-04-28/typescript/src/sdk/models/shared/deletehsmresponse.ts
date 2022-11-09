import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteHsmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HsmId" })
  hsmId?: string;
}
