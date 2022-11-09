import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransferData
/** 
 * Data used to transfer a certificate to an Amazon Web Services account.
**/
export class TransferData extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptDate" })
  acceptDate?: Date;

  @Metadata({ data: "json, name=rejectDate" })
  rejectDate?: Date;

  @Metadata({ data: "json, name=rejectReason" })
  rejectReason?: string;

  @Metadata({ data: "json, name=transferDate" })
  transferDate?: Date;

  @Metadata({ data: "json, name=transferMessage" })
  transferMessage?: string;
}
