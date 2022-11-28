import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AgcoPowerServicesModelsProductionData
/** 
 * Production data for an AGCO Power engine.
**/
export class AgcoPowerServicesModelsProductionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType: string;

  @SpeakeasyMetadata({ data: "json, name=DataValues" })
  dataValues: string;
}
