import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubDomainSetting
/** 
 *  Describes the settings for the subdomain. 
**/
export class SubDomainSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;
}
