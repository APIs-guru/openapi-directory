import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerProfilesDestinationProperties
/** 
 *  The properties that are applied when Amazon Connect Customer Profiles is used as a destination. 
**/
export class CustomerProfilesDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=objectTypeName" })
  objectTypeName?: string;
}
