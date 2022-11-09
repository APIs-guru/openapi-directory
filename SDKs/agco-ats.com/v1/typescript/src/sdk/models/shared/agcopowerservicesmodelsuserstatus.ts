import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AgcoPowerServicesModelsUserStatusStateEnum {
    Active = "Active"
,    Inactive = "Inactive"
,    None = "None"
}


// AgcoPowerServicesModelsUserStatus
/** 
 * Status of a voucher in the AGCO Power system
**/
export class AgcoPowerServicesModelsUserStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=DealerCode, form, name=DealerCode;" })
  dealerCode: string;

  @Metadata({ data: "json, name=State, form, name=State;" })
  state?: AgcoPowerServicesModelsUserStatusStateEnum;

  @Metadata({ data: "json, name=VoucherCode, form, name=VoucherCode;" })
  voucherCode: string;
}
