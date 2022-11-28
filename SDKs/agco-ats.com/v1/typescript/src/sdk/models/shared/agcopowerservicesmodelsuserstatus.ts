import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AgcoPowerServicesModelsUserStatusStateEnum {
    Active = "Active",
    Inactive = "Inactive",
    None = "None"
}


// AgcoPowerServicesModelsUserStatus
/** 
 * Status of a voucher in the AGCO Power system
**/
export class AgcoPowerServicesModelsUserStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode: string;

  @SpeakeasyMetadata({ data: "json, name=State, form, name=State;" })
  state?: AgcoPowerServicesModelsUserStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=VoucherCode, form, name=VoucherCode;" })
  voucherCode: string;
}
