import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerProfilesDestinationProperties
/** 
 *  The properties that are applied when Amazon Connect Customer Profiles is used as a destination. 
**/
export class CustomerProfilesDestinationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName: string;

  @Metadata({ data: "json, name=objectTypeName" })
  objectTypeName?: string;
}
