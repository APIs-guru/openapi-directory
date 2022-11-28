import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateAdminAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdminAccount" })
  adminAccount: string;
}
