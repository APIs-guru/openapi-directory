import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateRoleFromGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisassociatedAt" })
  disassociatedAt?: string;
}
