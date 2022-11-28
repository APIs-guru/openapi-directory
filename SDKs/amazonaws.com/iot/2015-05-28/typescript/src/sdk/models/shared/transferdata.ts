import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransferData
/** 
 * Data used to transfer a certificate to an Amazon Web Services account.
**/
export class TransferData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptDate" })
  acceptDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=rejectDate" })
  rejectDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=rejectReason" })
  rejectReason?: string;

  @SpeakeasyMetadata({ data: "json, name=transferDate" })
  transferDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transferMessage" })
  transferMessage?: string;
}
