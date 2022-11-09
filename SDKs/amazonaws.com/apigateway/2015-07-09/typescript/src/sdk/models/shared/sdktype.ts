import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SdkConfigurationProperty } from "./sdkconfigurationproperty";


// SdkType
/** 
 * A type of SDK that API Gateway can generate.
**/
export class SdkType extends SpeakeasyBase {
  @Metadata({ data: "json, name=configurationProperties", elemType: shared.SdkConfigurationProperty })
  configurationProperties?: SdkConfigurationProperty[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
