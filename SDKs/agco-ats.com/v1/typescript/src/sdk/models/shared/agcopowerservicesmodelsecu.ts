import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AgcoPowerServicesModelsEcuStateEnum {
    Active = "Active",
    Inactive = "Inactive",
    Damaged = "Damaged"
}


// AgcoPowerServicesModelsEcu
/** 
 * An AGCO Power ECU
**/
export class AgcoPowerServicesModelsEcu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivationCode, form, name=ActivationCode;" })
  activationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=DamagedDescription, form, name=DamagedDescription;" })
  damagedDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineSerialNumber, form, name=EngineSerialNumber;" })
  engineSerialNumber: string;

  @SpeakeasyMetadata({ data: "json, name=ReplacesECUSerialNumber, form, name=ReplacesECUSerialNumber;" })
  replacesEcuSerialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=SerialNumber, form, name=SerialNumber;" })
  serialNumber: string;

  @SpeakeasyMetadata({ data: "json, name=State, form, name=State;" })
  state: AgcoPowerServicesModelsEcuStateEnum;
}
