import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutgoingCertificate
/** 
 * A certificate that has been transferred but not yet accepted.
**/
export class OutgoingCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transferDate" })
  transferDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=transferMessage" })
  transferMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=transferredTo" })
  transferredTo?: string;
}
