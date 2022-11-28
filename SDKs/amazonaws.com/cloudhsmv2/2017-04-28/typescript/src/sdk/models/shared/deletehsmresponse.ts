import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteHsmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HsmId" })
  hsmId?: string;
}
