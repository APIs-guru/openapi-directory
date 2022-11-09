import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubDomainSetting
/** 
 *  Describes the settings for the subdomain. 
**/
export class SubDomainSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName: string;

  @Metadata({ data: "json, name=prefix" })
  prefix: string;
}
