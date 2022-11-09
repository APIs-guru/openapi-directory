import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutgoingCertificate
/** 
 * A certificate that has been transferred but not yet accepted.
**/
export class OutgoingCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=transferDate" })
  transferDate?: Date;

  @Metadata({ data: "json, name=transferMessage" })
  transferMessage?: string;

  @Metadata({ data: "json, name=transferredTo" })
  transferredTo?: string;
}
