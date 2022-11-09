import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AgcoPowerServicesModelsProductionData
/** 
 * Production data for an AGCO Power engine.
**/
export class AgcoPowerServicesModelsProductionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataType" })
  dataType: string;

  @Metadata({ data: "json, name=DataValues" })
  dataValues: string;
}
