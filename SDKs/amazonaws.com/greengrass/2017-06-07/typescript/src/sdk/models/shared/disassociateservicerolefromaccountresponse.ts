import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateServiceRoleFromAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisassociatedAt" })
  disassociatedAt?: string;
}
