import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AgcoPowerServicesModelsEcuStateEnum {
    Active = "Active"
,    Inactive = "Inactive"
,    Damaged = "Damaged"
}


// AgcoPowerServicesModelsEcu
/** 
 * An AGCO Power ECU
**/
export class AgcoPowerServicesModelsEcu extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivationCode, form, name=ActivationCode;" })
  activationCode?: string;

  @Metadata({ data: "json, name=DamagedDescription, form, name=DamagedDescription;" })
  damagedDescription?: string;

  @Metadata({ data: "json, name=EngineSerialNumber, form, name=EngineSerialNumber;" })
  engineSerialNumber: string;

  @Metadata({ data: "json, name=ReplacesECUSerialNumber, form, name=ReplacesECUSerialNumber;" })
  replacesEcuSerialNumber?: string;

  @Metadata({ data: "json, name=SerialNumber, form, name=SerialNumber;" })
  serialNumber: string;

  @Metadata({ data: "json, name=State, form, name=State;" })
  state: AgcoPowerServicesModelsEcuStateEnum;
}
