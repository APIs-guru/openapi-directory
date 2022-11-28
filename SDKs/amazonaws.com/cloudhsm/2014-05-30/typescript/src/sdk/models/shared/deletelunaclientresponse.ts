import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLunaClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: string;
}
