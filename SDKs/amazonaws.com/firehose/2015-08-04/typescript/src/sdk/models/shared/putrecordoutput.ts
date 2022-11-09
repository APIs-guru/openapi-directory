import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRecordOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=RecordId" })
  recordId: string;
}
