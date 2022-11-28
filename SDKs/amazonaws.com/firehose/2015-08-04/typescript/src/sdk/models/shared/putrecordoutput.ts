import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRecordOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RecordId" })
  recordId: string;
}
